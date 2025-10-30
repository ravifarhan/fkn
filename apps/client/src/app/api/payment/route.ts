import { NextRequest, NextResponse } from "next/server";
import midtransClient from "midtrans-client";
import { Transaction } from "@/types";

export async function POST(req: NextRequest) {
  try {
    const body: Transaction = await req.json();

    const snap = new midtransClient.Snap({
      isProduction: false,
      clientKey: process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY!,
      serverKey: process.env.MIDTRANS_SERVER_KEY!,
    });

    const [courier_code, courier_service_code, priceString] =
      body.shippingMethod?.split(",") ?? [];
    const shippingPrice = Number(priceString || 0);

    const item_details = [
      ...body.transactionItems.map((item) => ({
        id: item.productId,
        name: item.name,
        price: Math.floor(item.price),
        quantity: item.quantity,
      })),
      {
        id: courier_code,
        name: `${courier_code} - ${courier_service_code}`,
        price: shippingPrice,
        quantity: 1,
      },
    ];

    const gross_amount = item_details.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    const parameter = {
      transaction_details: {
        order_id: body.orderId,
        gross_amount,
      },
      customer_details: {
        first_name: body.fullname,
        phone: body.phone,
      },
      item_details,
    };

    const transaction = await snap.createTransaction(parameter);

    return NextResponse.json({
      token: transaction.token,
      redirect_url: transaction.redirect_url,
    });
  } catch (error) {
    console.error("Midtrans Error:", error);
    return NextResponse.json(
      { error: "Error create transaction" },
      { status: 500 }
    );
  }
}

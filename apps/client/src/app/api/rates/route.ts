import { biteship } from "@/lib";
import { RatesRequest } from "@/types";
import { AxiosError } from "axios";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body: RatesRequest = await req.json();

    const res = await biteship.post("/v1/rates/couriers", {
      ...body,
    });

    return NextResponse.json(res.data);
  } catch (err) {
    if (err instanceof AxiosError) {
      console.error("Biteship Error:", err.response?.data);
      return NextResponse.json(
        err.response?.data ?? { error: "Failed to fetch rates" },
        { status: err.response?.status ?? 500 }
      );
    }
    console.error("Error:", err);
    return NextResponse.json(
      { error: "Unexpected server error" },
      { status: 500 }
    );
  }
}

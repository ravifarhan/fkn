import { supabase } from "@/lib";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const provinceId = searchParams.get("provinceId");

  if (!provinceId) {
    return NextResponse.json(
      { error: "provinceId is required" },
      { status: 400 }
    );
  }

  const { data, error } = await supabase
    .from("regencies")
    .select("id, province_id, regency_name")
    .order("regency_name")
    .eq("province_id", Number(provinceId));

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}

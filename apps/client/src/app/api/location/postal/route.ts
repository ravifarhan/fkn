import { supabase } from "@/lib";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const districtId = searchParams.get("districtId");

  if (!districtId) {
    return NextResponse.json(
      { error: "districId is required" },
      { status: 400 }
    );
  }

  const { data, error } = await supabase
    .from("postal_codes")
    .select("id, district_id, postal_code")
    .order("postal_code")
    .eq("district_id", Number(districtId));

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}

import { supabase } from "@/lib";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const regencyId = searchParams.get("regencyId");

  if (!regencyId) {
    return NextResponse.json(
      { error: "regencyId is required" },
      { status: 400 }
    );
  }

  const { data, error } = await supabase
    .from("districts")
    .select("id, regency_id, district_name")
    .order("district_name")
    .eq("regency_id", Number(regencyId));

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}

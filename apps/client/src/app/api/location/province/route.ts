import { supabase } from "@/lib";
import { NextResponse } from "next/server";

export async function GET(){
  const { data, error } = await supabase
    .from("provinces")
    .select("id, province_name")
    .order("province_name");

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}

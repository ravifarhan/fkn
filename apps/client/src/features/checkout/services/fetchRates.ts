import type { RatesRequest } from "@/types";

export async function fetchRates(payload: RatesRequest) {
  const res = await fetch("/api/rates", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) throw new Error("Failed to fetch rates");

  const data = await res.json();

  return data.pricing ?? [];
}
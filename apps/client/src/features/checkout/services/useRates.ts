"use client";

import {  RatesRequest, Rates } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { fetchRates } from "./fetchRates";

export function useRates(payload?: RatesRequest) {
  return useQuery<Rates[], Error>({
    queryKey: ["rates", payload],
    queryFn: () => fetchRates(payload!),
    enabled: !!payload,
    staleTime: 1000 * 60 * 10,
  });
}

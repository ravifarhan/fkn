import { District, PostalCode, Province, Regency } from "@/types";

export const fetchProvinces = async (): Promise<Province[]> => {
  const res = await fetch("/api/location/province");

  if (!res.ok) throw new Error("Failed to fetch provinces");

  return res.json();
};

export const fetchRegencies = async (provinceId: number): Promise<Regency[]> => {
  const res = await fetch(`/api/location/regency?provinceId=${provinceId}`);

  if (!res.ok) throw new Error("Failed to fetch regencies");

  return res.json();
};

export const fetchDistricts = async (regencyId: number): Promise<District[]> => {
  const res = await fetch(`/api/location/district?regencyId=${regencyId}`);

  if (!res.ok) throw new Error("Failed to fetch district");

  return res.json();
};

export const fetchPostalCodes = async (districtId: number): Promise<PostalCode[]> => {
  const res = await fetch(`/api/location/postal?districtId=${districtId}`);

  if (!res.ok) throw new Error("Failed to fetch postal code");

  return res.json();
};
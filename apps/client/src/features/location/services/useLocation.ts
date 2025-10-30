import { useQuery } from "@tanstack/react-query";
import {
  fetchDistricts,
  fetchPostalCodes,
  fetchProvinces,
  fetchRegencies,
} from "./fetchLocation";

export const useProvince = () => {
  return useQuery({
    queryKey: ["provinces"],
    queryFn: fetchProvinces,
    staleTime: Infinity,
  });
};

export const useRegency = (provinceId: number) => {
  return useQuery({
    queryKey: ["regencies", provinceId],
    queryFn: () => fetchRegencies(provinceId),
    enabled: !!provinceId,
    staleTime: 1000 * 60 * 10,
  });
};

export const useDistrict = (regencyId: number) => {
  return useQuery({
    queryKey: ["districts", regencyId],
    queryFn: () => fetchDistricts(regencyId),
    enabled: !!regencyId,
    staleTime: 1000 * 60 * 10,
  });
};

export const usePostalCode = (districtId: number) => {
  return useQuery({
    queryKey: ["postal_codes", districtId],
    queryFn: () => fetchPostalCodes(districtId),
    enabled: !!districtId,
    staleTime: 1000 * 60 * 10,
  });
};

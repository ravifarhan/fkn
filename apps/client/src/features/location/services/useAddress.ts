import { useEffect, useMemo } from "react";
import { useFormContext } from "react-hook-form";
import { useDistrict, usePostalCode, useProvince, useRegency } from "./useLocation";

export function useAddress() {
  const { watch, setValue } = useFormContext();
  const provinceId = watch("province");
  const regencyId = watch("regency");
  const districtId = watch("district");

  const selectedProvince = useMemo(() => Number(provinceId) || 0, [provinceId]);
  const selectedRegency = useMemo(() => Number(regencyId) || 0, [regencyId]);
  const selectedDistrict = useMemo(() => Number(districtId) || 0, [districtId]);

  const { data: province, isLoading: isLoadingProvince } = useProvince();
  const { data: regency, isLoading: isLoadingRegency } =
    useRegency(selectedProvince);
  const { data: district, isLoading: isLoadingDistrict } =
    useDistrict(selectedRegency);
  const { data: postal, isLoading: isLoadingPostal } =
    usePostalCode(selectedDistrict);

  useEffect(() => {
    setValue("regency", "");
    setValue("district", "");
    setValue("postal_code", "");
    setValue("address", "");
  }, [selectedProvince, setValue]);

  useEffect(() => {
    setValue("district", "");
    setValue("postal_code", "");
    setValue("address", "");
  }, [selectedRegency, setValue]);

  useEffect(() => {
    setValue("postal_code", "");
    setValue("address", "");
  }, [selectedDistrict, setValue]);

  return {
    province,
    regency,
    district,
    postal,
    selectedProvince,
    selectedRegency,
    selectedDistrict,
    isLoadingProvince,
    isLoadingRegency,
    isLoadingDistrict,
    isLoadingPostal,
  };
}

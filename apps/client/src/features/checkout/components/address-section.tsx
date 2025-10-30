"use client";

import {
  FieldDescription,
  FieldGroup,
  FieldLegend,
  FieldSet,
} from "@repo/ui/components/field";
import { CheckoutValues } from "../schema";
import { useFormContext } from "react-hook-form";
import { FormSelect, FormTextarea } from "@/components";
import { useAddress } from "@/features/location";

export const AddressSection = () => {
  const { control } = useFormContext<CheckoutValues>();

  const {
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
  } = useAddress();

  const provinceOptions = province?.map((item) => ({
    id: item.id,
    label: item.province_name,
  }));
  const regencyOptions = regency?.map((item) => ({
    id: item.id,
    label: item.regency_name,
  }));
  const districtOptions = district?.map((item) => ({
    id: item.id,
    label: item.district_name,
  }));
  const postalOptions = postal?.map((item) => ({
    id: item.id,
    label: item.postal_code,
    value: item.postal_code,
  }));

  return (
    <FieldSet className="gap-0">
      <FieldLegend className="mb-1">Address</FieldLegend>
      <FieldDescription>Please provide your full address.</FieldDescription>
      <FieldGroup>
        <div className="grid md:grid-cols-2 gap-4">
          <FormSelect
            name="province"
            control={control}
            placeholder="Province"
            options={provinceOptions}
            isLoading={isLoadingProvince}
          />
          <FormSelect
            name="regency"
            control={control}
            placeholder="Regency"
            options={regencyOptions}
            isLoading={isLoadingRegency}
            disabled={isLoadingProvince || !selectedProvince}
          />
          <FormSelect
            name="district"
            control={control}
            placeholder="City"
            options={districtOptions}
            isLoading={isLoadingDistrict}
            disabled={isLoadingRegency || !selectedRegency}
          />
          <FormSelect
            name="postal_code"
            control={control}
            placeholder="Postal code"
            options={postalOptions}
            isLoading={isLoadingPostal}
            disabled={isLoadingDistrict || !selectedDistrict}
          />
        </div>
        <FormTextarea
          name="address"
          control={control}
          placeholder="Jl. Sudirman No.1. RT/RW"
        />
      </FieldGroup>
    </FieldSet>
  );
};

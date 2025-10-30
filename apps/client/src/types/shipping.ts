export interface RatesRequest {
  origin_postal_code: number;
  destination_postal_code: number;
  couriers: string;
  items: {
    name: string;
    value: number;
    length: number;
    width: number;
    height: number;
    weight: number;
    quantity: number;
  }[];
}

export type ServiceType = "standard" | "same_day" | "overnight";
export type PackageType = "parcel" | "freight";

export interface Rates {
  courier_code: string;
  courier_service_code: string;
  courier_name: string;
  courier_service_name: string;
  price: number;
  duration: string;
  service_type: ServiceType;
  shipping_type: PackageType;
}

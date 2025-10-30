export interface Province {
  id: number;
  province_name: string;
}

export interface Regency {
  id: number;
  province_id: number;
  regency_name: string;
}

export interface District {
  id: number;
  regency_id: number;
  district_name: string;
}

export interface PostalCode {
  id: number;
  district_id: number;
  postal_code: number;
}

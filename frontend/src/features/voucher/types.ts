export const AIRCRAFT_TYPES = [
  "ATR",
  "Airbus 320",
  "Boeing 737 Max",
] as const;

export type AircraftType = (typeof AIRCRAFT_TYPES)[number];

export interface VoucherFormData {
  name: string;
  id: string;
  flightNumber: string;
  date: string;
  aircraft: AircraftType;
}

export interface CheckVoucherResponse {
  exists: boolean;
}

export interface GenerateVoucherResponse {
  success: boolean;
  seats: string[];
}
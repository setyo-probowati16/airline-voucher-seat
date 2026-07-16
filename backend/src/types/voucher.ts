import { AircraftType } from "../utils/aircraft";

export interface Voucher {
  id?: number;
  crew_name: string;
  crew_id: string;
  flight_number: string;
  flight_date: string;
  aircraft_type: string;
  seat1: string;
  seat2: string;
  seat3: string;
  created_at: string;
}

export interface CheckVoucherRequest {
  flightNumber: string;
  date: string;
}

export interface GenerateVoucherRequest {
  name: string;
  id: string;
  flightNumber: string;
  date: string;
  aircraft: AircraftType;
}
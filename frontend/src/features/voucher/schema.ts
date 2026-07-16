import { z } from "zod";
import { AIRCRAFT_TYPES } from "./types";

export const voucherSchema = z.object({
  name: z.string().min(1, "Crew Name is required"),
  id: z.string().min(1, "Crew ID is required"),
  flightNumber: z.string().min(1, "Flight Number is required"),
  date: z.string().min(1, "Flight Date is required"),
  aircraft: z.enum(AIRCRAFT_TYPES),
});

export type VoucherSchema = z.infer<typeof voucherSchema>;
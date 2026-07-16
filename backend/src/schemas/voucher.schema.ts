import { z } from "zod";

export const checkVoucherSchema = z.object({
  flightNumber: z.string().min(1),
  date: z.string().min(1),
});

export const generateVoucherSchema = z.object({
  name: z.string().min(1),
  id: z.string().min(1),
  flightNumber: z.string().min(1),
  date: z.string().min(1),
  aircraft: z.enum([
    "ATR",
    "Airbus 320",
    "Boeing 737 Max",
  ]),
});
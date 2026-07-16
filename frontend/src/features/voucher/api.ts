import { api } from "@/lib/axios";
import type {
  CheckVoucherResponse,
  GenerateVoucherResponse,
  VoucherFormData,
} from "./types";

export const voucherApi = {
  async check(
    flightNumber: string,
    date: string
  ): Promise<CheckVoucherResponse> {
    const { data } = await api.post<CheckVoucherResponse>(
      "/check",
      {
        flightNumber,
        date,
      }
    );

    return data;
  },

  async generate(
    payload: VoucherFormData
  ): Promise<GenerateVoucherResponse> {
    const { data } =
      await api.post<GenerateVoucherResponse>(
        "/generate",
        payload
      );

    return data;
  },
};
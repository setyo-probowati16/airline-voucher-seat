import { useState } from "react";
import { AxiosError } from "axios";

import { voucherApi } from "./api";
import type { VoucherFormData } from "./types";

export function useVoucher() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function generateVoucher(
    data: VoucherFormData
  ): Promise<string[] | null> {
    setLoading(true);
    setError("");

    try {
      const exists = await voucherApi.check(
        data.flightNumber,
        data.date
      );

      if (exists.exists) {
        throw new Error(
          "Voucher has already been generated."
        );
      }

      const result =
        await voucherApi.generate(data);

      return result.seats;
    } catch (err) {
      if (err instanceof AxiosError) {
        setError(
          err.response?.data?.message ??
            "Something went wrong."
        );
      } else if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Unexpected error.");
      }

      return null;
    } finally {
      setLoading(false);
    }
  }

  return {
    loading,
    error,
    generateVoucher,
  };
}
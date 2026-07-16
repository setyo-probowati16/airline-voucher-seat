import { Plane } from "lucide-react";

export function VoucherHeader() {
  return (
    <div className="bg-gradient-to-r from-sky-700 to-blue-900 px-8 py-8 text-white">
      <div className="flex items-center gap-4">
        <div className="rounded-xl bg-white/15 p-3">
          <Plane className="h-7 w-7" />
        </div>

        <div>
          <h1 className="text-3xl font-bold">
            Aero Airline
          </h1>

          <p className="text-blue-100">
            Voucher Seat Application
          </p>
        </div>
      </div>
    </div>
  );
}
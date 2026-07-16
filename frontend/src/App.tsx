import { useState } from "react";

import VoucherForm from "./features/voucher/components/VoucherForm";
import SeatResult from "./features/voucher/components/SeatResult";


function App() {
  const [seats, setSeats] = useState<string[]>([]);

  return (
    <main className="min-h-screen bg-slate-100 py-10">
      <div className="mx-auto max-w-xl px-4">
        <VoucherForm
          onSuccess={setSeats}
        />

        <SeatResult
          seats={seats}
        />
      </div>
    </main>
  );
}

export default App;
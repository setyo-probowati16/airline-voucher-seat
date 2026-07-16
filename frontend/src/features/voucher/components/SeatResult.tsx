import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface SeatResultProps {
  seats: string[];
}

export default function SeatResult({
  seats,
}: SeatResultProps) {
  if (seats.length === 0) return null;

  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>Generated Seats</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="grid grid-cols-3 gap-4">
          {seats.map((seat) => (
            <div
              key={seat}
              className="flex h-24 items-center justify-center rounded-lg border bg-slate-50 text-2xl font-bold text-slate-800"
            >
              {seat}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
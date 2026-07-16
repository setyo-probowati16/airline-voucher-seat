import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import type { FieldError } from "react-hook-form";
import { AIRCRAFT_TYPES } from "../types";


interface Props {
  value: string;
  error?: FieldError;
  onChange: (value: string) => void;
}

export function AircraftSelect({
  value,
  error,
  onChange,
}: Props) {
  return (
    <div className="md:col-span-2">
      <Label className="mb-2 block">
        Aircraft
      </Label>

      <Select
        value={value}
        onValueChange={onChange}
      >
        <SelectTrigger
          className={
            error
              ? "border-red-500 focus:ring-red-500"
              : ""
          }
        >
          <SelectValue placeholder="Select aircraft" />
        </SelectTrigger>

        <SelectContent>
          {AIRCRAFT_TYPES.map((item) => (
            <SelectItem
              key={item}
              value={item}
            >
              {item}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {error && (
        <p className="mt-1 text-sm text-red-500">
          {error.message}
        </p>
      )}
    </div>
  );
}
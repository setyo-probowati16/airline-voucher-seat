export const AIRCRAFT_LAYOUT = {
  ATR: {
    rows: 18,
    seats: ["A", "C", "D", "F"],
  },
  "Airbus 320": {
    rows: 32,
    seats: ["A", "B", "C", "D", "E", "F"],
  },
  "Boeing 737 Max": {
    rows: 32,
    seats: ["A", "B", "C", "D", "E", "F"],
  },
} as const;


export type AircraftType = keyof typeof AIRCRAFT_LAYOUT;

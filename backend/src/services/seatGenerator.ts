import { AircraftType, AIRCRAFT_LAYOUT } from "../utils/aircraft";

export function generateSeats(
  aircraft: AircraftType,
  count = 3
): string[] {
  const config = AIRCRAFT_LAYOUT[aircraft];

  if (!config) {
    throw new Error("Invalid aircraft type");
  }

  const allSeats: string[] = [];

  for (let row = 1; row <= config.rows; row++) {
    for (const seat of config.seats) {
      allSeats.push(`${row}${seat}`);
    }
  }

  // Fisher-Yates Shuffle used to generate random shuffle value
  for (let i = allSeats.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [allSeats[i], allSeats[j]] = [allSeats[j], allSeats[i]];
  }

  return allSeats.slice(0, count);
}
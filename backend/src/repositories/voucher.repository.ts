import db from "../config/db";
import { Voucher } from "../types/voucher";

export class VoucherRepository {
  findByFlight(flightNumber: string, date: string): Voucher | undefined {
    const stmt = db.prepare(`
      SELECT *
      FROM vouchers
      WHERE flight_number = ?
      AND flight_date = ?
    `);

    return stmt.get(flightNumber, date) as Voucher | undefined;
  }

  create(voucher: Voucher): number {
    const stmt = db.prepare(`
      INSERT INTO vouchers (
        crew_name,
        crew_id,
        flight_number,
        flight_date,
        aircraft_type,
        seat1,
        seat2,
        seat3,
        created_at
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    const result = stmt.run(
      voucher.crew_name,
      voucher.crew_id,
      voucher.flight_number,
      voucher.flight_date,
      voucher.aircraft_type,
      voucher.seat1,
      voucher.seat2,
      voucher.seat3,
      voucher.created_at
    );

    return Number(result.lastInsertRowid);
  }
}

export default new VoucherRepository();
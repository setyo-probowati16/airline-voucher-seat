import repository from '../repositories/voucher.repository';
import { GenerateVoucherRequest } from '../types/voucher';
import { generateSeats } from './seatGenerator';
import { AppError } from '../utils/AppError';

class VoucherService {
  private checkVoucherExists(flightNumber: string, date: string) {
    return !!repository.findByFlight(flightNumber, date);
  }

  public check(flightNumber: string, date: string) {
    return this.checkVoucherExists(flightNumber, date);
  }
  
  public generateVoucher(request: GenerateVoucherRequest) {
    const exists = this.checkVoucherExists(request.flightNumber, request.date);

    if (exists) {
      throw new AppError(409, 'Voucher has already been generated for this flight.');
    }

    const seats = generateSeats(request.aircraft);

    repository.create({
      crew_name: request.name,
      crew_id: request.id,
      flight_number: request.flightNumber,
      flight_date: request.date,
      aircraft_type: request.aircraft,
      seat1: seats[0],
      seat2: seats[1],
      seat3: seats[2],
      created_at: new Date().toISOString(),
    });

    return seats;
  }
}

export default new VoucherService();

import { Request, Response } from "express";
import voucherService from "../services/voucher.service";
import {
  checkVoucherSchema,
  generateVoucherSchema,
} from "../schemas/voucher.schema";
import { asyncHandler } from "../middleware/asyncHandler";

class VoucherController {
  check = asyncHandler((req: Request, res: Response) => {
    const body = checkVoucherSchema.parse(req.body);

    const exists = voucherService.check(
      body.flightNumber,
      body.date
    );

    res.json({
      exists,
    });
  });

  generate = asyncHandler((req: Request, res: Response) => {
    const body = generateVoucherSchema.parse(req.body);

    const seats = voucherService.generateVoucher(body);

    res.status(201).json({
      success: true,
      seats,
    });
  });
}

export default new VoucherController();
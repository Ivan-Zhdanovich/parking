import {
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Put,
} from '@nestjs/common';
import { ReservationService } from './reservation.service';

@Controller('reservation')
export class ReservationController {
  constructor(private readonly reservationService: ReservationService) {}

  @Put(':id')
  reserve(@Param('id', ParseIntPipe) id: number) {
    return this.reservationService.reserve(id);
  }

  @Get(':id')
  findAllBelongToOne(@Param('id', ParseIntPipe) id: number) {
    return this.reservationService.findAllBelongToOne(id);
  }

  @Delete(':id')
  @HttpCode(204)
  cancel(@Param('id', ParseIntPipe) id: number) {
    return this.reservationService.cancel(id);
  }
}

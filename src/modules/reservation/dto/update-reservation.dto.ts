import { IsString } from '@nestjs/class-validator';

export class UpdateReservation {
  @IsString()
  reserved_date: string;

  @IsString()
  reserved_time: string;

  @IsString()
  status: string;
}

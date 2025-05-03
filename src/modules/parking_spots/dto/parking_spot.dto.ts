import { IsNotEmpty, IsString } from '@nestjs/class-validator';

export class ParkingSpotDto {
  @IsString()
  @IsNotEmpty()
  location: string;
}

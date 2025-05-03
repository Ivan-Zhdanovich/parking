import { Controller, Get } from '@nestjs/common';
import { ParkingSpotsService } from './parking_spots.service';
import { ParkingSpotDto } from './dto/parking_spot.dto';

@Controller('api/parking-spots')
export class ParkingSpotsController {
  constructor(private readonly parkingSpotsService: ParkingSpotsService) {}

  @Get()
  findAllParkingSpots(): Promise<ParkingSpotDto[]> {
    return this.parkingSpotsService.findAllParkingSpots();
  }
}

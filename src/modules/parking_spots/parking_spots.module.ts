import { Module } from '@nestjs/common';
import { ParkingSpotsService } from './parking_spots.service';
import { ParkingSpotsController } from './parking_spots.controller';
import { ParkingSpotRepository } from './repository/parking_spot.repository';
import { ParkingSpots } from './entities/parking_spot.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ParkingSpots])],
  providers: [ParkingSpotsService, ParkingSpotRepository],
  controllers: [ParkingSpotsController],
})
export class ParkingSpotsModule {}

import { Injectable, NotFoundException } from '@nestjs/common';
import { ParkingSpotRepository } from './repository/parking_spot.repository';
import { ParkingSpots } from './entities/parking_spot.entity';

@Injectable()
export class ParkingSpotsService {
  constructor(private readonly parkingSportRepository: ParkingSpotRepository) {}

  async findAllParkingSpots(): Promise<ParkingSpots[]> {
    const parkingSpots = await this.parkingSportRepository.find();
    if (!parkingSpots) {
      throw new NotFoundException(`There are no available spots`);
    }
    return parkingSpots;
  }
}

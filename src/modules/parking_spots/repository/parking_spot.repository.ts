import { Injectable } from '@nestjs/common';
import { ParkingSpots } from '../entities/parking_spot.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class ParkingSpotRepository extends Repository<ParkingSpots> {
  constructor(private dataSource: DataSource) {
    super(ParkingSpots, dataSource.createEntityManager());
  }
}

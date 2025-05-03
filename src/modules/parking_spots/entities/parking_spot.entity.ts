import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ParkingSpots {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  location: string;
}

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Reservations {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: number;

  @Column()
  parking_spot_number: number;

  @Column()
  reserved_date: string;

  @Column()
  reserved_time: string;

  @Column()
  status: string;
}

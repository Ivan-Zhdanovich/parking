import { Injectable, NotFoundException } from '@nestjs/common';
import { ReservationRepository } from './repositories/reservation.repository';
import { Reservations } from './entities/reservation.entity';

@Injectable()
export class ReservationService {
  constructor(private readonly reservationRepository: ReservationRepository) {}

  async findOne(id: number): Promise<Reservations> {
    const reservation = await this.reservationRepository.findOneBy({ id });
    if (!reservation) {
      throw new NotFoundException(`Reservation with ID ${id} not found`);
    }
    return reservation;
  }

  getDateDays = () => {
    const now = new Date();
    const nowDays = now.toLocaleDateString('en-Us');
    return `${nowDays}`;
  };

  getDateHours = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    return `${hours}:${minutes}`;
  };

  async reserve(id: number) {
    const parkingSpotToReserve: Reservations = await this.findOne(id);
    if (parkingSpotToReserve) {
      parkingSpotToReserve.status = 'booked';
      parkingSpotToReserve.reserved_date = this.getDateDays();
      parkingSpotToReserve.reserved_time = this.getDateHours();
    }
    return parkingSpotToReserve;
  }

  async cancel(id: number) {
    const result = await this.reservationRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Reservation with ID ${id} not found`);
    }
  }

  async findAllBelongToOne(user_id: number): Promise<Reservations[]> {
    const parkingSpots = await this.reservationRepository.find({
      where: { user_id: user_id },
    });
    if (!parkingSpots) {
      throw new NotFoundException(
        `There are no parking spots reserved for this ${user_id}`,
      );
    }
    return parkingSpots;
  }
}

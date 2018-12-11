import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rental } from './rental.model';

@Injectable()
export class RentalService {

    private rentals: Rental[] = [{
        id: "1",
        title: "Central Appartment",
        city: "New York",
        street: "Times Square",
        category: "Appartment",
        image :"http://via.placeholder.com/350x250",
        bedrooms: 3,
        description: "Excelent view",
        dailyRate: 34,
        shared: false,
        createdAt: "24/12/2017"
      },
      {
        id: "2",
        title: "Smalll Appartment",
        city: "San Francisco",
        street: "Fisherman's Warf",
        category: "Appartment",
        image :"http://via.placeholder.com/350x250",
        bedrooms: 4,
        description: "Calm neighborhood",
        dailyRate: 14,
        shared: false,
        createdAt: "24/02/2017"
      },
      {
        id: "3",
        title: "Central Appartment",
        city: "New York",
        street: "Madison Street",
        category: "Appartment",
        image :"http://via.placeholder.com/350x250",
        bedrooms: 2,
        description: "Great Location",
        dailyRate: 40,
        shared: false,
        createdAt: "14/10/2018"
      },
      {
        id: "4",
        title: "Beautiful Appartment",
        city: "Paris",
        street: "Champs Elysees",
        category: "Appartment",
        image :"http://via.placeholder.com/350x250",
        bedrooms: 5,
        description: "Perfect Ubication",
        dailyRate: 70,
        shared: false,
        createdAt: "24/12/2017"
      }];

    public getRentalById(rentalId: string): Observable<Rental> {
        return new Observable<Rental>((observer) => {

            setTimeout(() => {
                const foundRental = this.rentals.find((currentRental) => {
                    return currentRental.id == rentalId;
                });

                observer.next(foundRental);
            }, 500);
        });
    }

    public getRentals(): Observable<Rental[]> {
        return new Observable<Rental[]>(observer => {
            setTimeout(() => {
                observer.next(this.rentals);
            }, 1000);

            setTimeout(() => {
                observer.error("THERE IS AN ERROR");
            }, 2000);

            setTimeout(() => {
                observer.complete();
            }, 3000);

        });
    } 
}
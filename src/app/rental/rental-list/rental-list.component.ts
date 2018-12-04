import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bwm-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.scss']
})
export class RentalListComponent implements OnInit {

  rentals: any[] = [{
    id: 1,
    title: "Central Appartment",
    city: "New York",
    street: "Times Square",
    category: "appartment",
    image :"http://via.placeholder.com/350x250",
    bedrooms: 3,
    description: "Excelent view",
    dailyRate: 34,
    shared: false,
    createdAt: "24/12/2017"
  },
  {
    id: 2,
    title: "Smalll Appartment",
    city: "San Francisco",
    street: "Fisherman's Warf",
    category: "appartment",
    image :"http://via.placeholder.com/350x250",
    bedrooms: 4,
    description: "Calm neighborhood",
    dailyRate: 14,
    shared: false,
    createdAt: "24/02/2017"
  },
  {
    id: 3,
    title: "Central Appartment",
    city: "New York",
    street: "Madison Street",
    category: "appartment",
    image :"http://via.placeholder.com/350x250",
    bedrooms: 2,
    description: "Great Location",
    dailyRate: 40,
    shared: false,
    createdAt: "14/10/2018"
  },
  {
    id: 4,
    title: "Beautiful Appartment",
    city: "Paris",
    street: "Champs Elysees",
    category: "appartment",
    image :"http://via.placeholder.com/350x250",
    bedrooms: 5,
    description: "Perfect Ubication",
    dailyRate: 70,
    shared: false,
    createdAt: "24/12/2017"
  }];

  constructor() { }

  ngOnInit() {
  }

}

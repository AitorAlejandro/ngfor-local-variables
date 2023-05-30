import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private people = [
    {
      id: 1,
      first_name: 'Tamara',
      last_name: 'Oxbe',
      email: 'toxbe0@ca.gov',
    },
    {
      id: 2,
      first_name: 'Doug',
      last_name: 'Pryke',
      email: 'dpryke1@jugem.jp',
    },
    {
      id: 3,
      first_name: 'Felike',
      last_name: 'Fogden',
      email: 'ffogden2@google.ru',
    },
    {
      id: 4,
      first_name: 'Tristam',
      last_name: 'Minto',
      email: 'tminto3@i2i.jp',
    },
    {
      id: 5,
      first_name: 'Ludwig',
      last_name: 'Abramovitch',
      email: 'labramovitch4@webmd.com',
    },
    {
      id: 6,
      first_name: 'Lynnet',
      last_name: 'Corbert',
      email: 'lcorbert5@epa.gov',
    },
    {
      id: 7,
      first_name: 'Merrick',
      last_name: 'Enderson',
      email: 'menderson6@ow.ly',
    },
    {
      id: 8,
      first_name: 'Jehanna',
      last_name: 'Wiltshear',
      email: 'jwiltshear7@technorati.com',
    },
    {
      id: 9,
      first_name: 'Blinny',
      last_name: 'Birdwhistell',
      email: 'bbirdwhistell8@chron.com',
    },
    {
      id: 10,
      first_name: 'Hortensia',
      last_name: 'Bearne',
      email: 'hbearne9@webnode.com',
    },
    {
      id: 11,
      first_name: 'Cordie',
      last_name: 'Ca',
      email: 'ccaa@accuweather.com',
    },
    {
      id: 12,
      first_name: 'Jeniffer',
      last_name: 'Hedingham',
      email: 'jhedinghamb@who.int',
    },
  ];

  constructor() {}

  getPeople() {
    return this.people;
  }
}

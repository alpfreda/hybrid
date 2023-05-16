import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateDatesOfDate } from '@hybrid/common';

@Component({
  selector: 'hybrid-calendar-head',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calendar-head.component.html',
  styleUrls: ['./calendar-head.component.scss'],
})
export class CalendarHeadComponent implements OnInit {
  dates: string[] = generateDatesOfDate(new Date());
  names: string[] = [
    'Mehdi',
    'Ali',
    'Alex',
    'Nilufer',
    'Saeed',
    'Gokhan',
    'Serdar',
    'Fatih',
    'Kemal',
    'Burak',
    'Buse',
    'Nida',
    'Ozcan',
  ];

  ngOnInit(): void {
    console.log(this.dates);
  }
}

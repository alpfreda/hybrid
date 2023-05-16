import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarHeadComponent } from './calendar-head/calendar-head.component';
import { CalendarMainComponent } from './calendar-main/calendar-main.component';

@Component({
  selector: 'hybrid-calendar',
  standalone: true,
  imports: [CommonModule, CalendarHeadComponent, CalendarMainComponent],
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent {}

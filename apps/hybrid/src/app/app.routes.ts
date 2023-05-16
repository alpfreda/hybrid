import { Route } from '@angular/router';
import { CalendarComponent } from '../components/calendar/calendar.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: CalendarComponent,
  },
];

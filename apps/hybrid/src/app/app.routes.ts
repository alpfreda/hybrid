import { Route } from '@angular/router';
import { CalendarComponent } from '../components/calendar/calendar.component';
import { LoginComponent } from '../components/login/login.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: CalendarComponent,
  },
];

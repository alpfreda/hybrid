import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { User } from '../models/user.models';

@Injectable({
  providedIn: 'root',
})
export class profileService {
  login = (): Observable<User> => {
    const user: User = { name: 'Mehdi' };
    return of(user).pipe(delay(2000));
  };
}

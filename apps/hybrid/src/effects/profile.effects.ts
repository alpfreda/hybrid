import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import * as ProfileActions from '../actions/profile.actions';
import { profileService } from '../services/profile.service';

@Injectable()
export class ProfileEffects {
  private actions$ = inject(Actions);

  constructor(private profileService: profileService) {}

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProfileActions.loginInit),
      switchMap(() =>
        this.profileService
          .login()
          .pipe(map((user) => ProfileActions.loginSuccess({ user })))
      ),
      catchError((error) => {
        return of(ProfileActions.loginFailure({ error }));
      })
    )
  );
}

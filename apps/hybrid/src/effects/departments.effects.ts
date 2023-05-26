import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import * as DepartmentsActions from '../actions/departments.actions';
import { DepartmentsService } from '../services/departments.service';

@Injectable()
export class DepartmentsEffects {
  private actions$ = inject(Actions);
  constructor(private departmentsService: DepartmentsService) {}
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DepartmentsActions.initDepartments),
      switchMap(() =>
        this.departmentsService.getDepartments().pipe(
          map((departments) =>
            DepartmentsActions.loadDepartmentsSuccess({
              departments,
            })
          )
        )
      ),
      catchError((error) => {
        console.error('Error', error);
        return of(DepartmentsActions.loadDepartmentsFailure({ error }));
      })
    )
  );
}

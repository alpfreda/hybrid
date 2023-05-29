import { createAction, props } from '@ngrx/store';
import { User } from '../models/user.models';

export const loginInit = createAction('[Profile Page] Init');

export const loginSuccess = createAction(
  '[Login/API] Load Login Success',
  props<{ user: User }>()
);

export const loginFailure = createAction(
  '[Login/API] Load Login Failure',
  props<{ error: any }>()
);

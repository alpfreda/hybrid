import { Action, createReducer, on } from '@ngrx/store';

import * as ProfileActions from '../actions/profile.actions';
import { Profile } from '../models/profile.models';

export const PROFILE_FEATURE_KEY = 'profile';

export interface ProfilePartialState {
  readonly [PROFILE_FEATURE_KEY]: Profile;
}

export const initialProfileState: Profile = {
  user: null,
  isLoading: false
};

const reducer = createReducer(
  initialProfileState,
  on(ProfileActions.loginInit, (state) => ({
    ...state,
    isLoading: true,
    error: null,
  })),
  on(ProfileActions.loginSuccess, (state, { user }) => ({
    ...state,
    user,
    isLoading: false,
  })),
  on(ProfileActions.loginFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function profileReducer(
  state: Profile | undefined,
  action: Action
) {
  return reducer(state, action);
}

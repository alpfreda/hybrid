import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PROFILE_FEATURE_KEY } from '../reducers/profile.reducer';

import { Profile } from '../models/profile.models';

// // Lookup the 'Profile' feature state managed by NgRx
export const selectProfileState =
  createFeatureSelector<Profile>(PROFILE_FEATURE_KEY);

// const { selectAll, selectEntities } = profileAdapter.getSelectors();

export const selectProfileLoader = createSelector(
  selectProfileState,
  (state: Profile) => state.isLoading
);

export const selectProfileUser = createSelector(
  selectProfileState,
  (state: Profile) => state.user
);

// export const selectProfileError = createSelector(
//   selectProfileState,
//   (state: ProfileState) => state.error
// );

// export const selectAllProfile = createSelector(
//   selectProfileState,
//   (state: ProfileState) => selectAll(state)
// );

// export const selectProfileEntities = createSelector(
//   selectProfileState,
//   (state: ProfileState) => selectEntities(state)
// );

// export const selectSelectedId = createSelector(
//   selectProfileState,
//   (state: ProfileState) => state.selectedId
// );

// export const selectEntity = createSelector(
//   selectProfileEntities,
//   selectSelectedId,
//   (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
// );

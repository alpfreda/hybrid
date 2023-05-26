import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  DEPARTMENTS_FEATURE_KEY,
  DepartmentsState,
  departmentsAdapter,
} from '../reducers/departments.reducer';

// Lookup the 'Departments' feature state managed by NgRx
export const selectDepartmentsState = createFeatureSelector<DepartmentsState>(
  DEPARTMENTS_FEATURE_KEY
);

const { selectAll, selectEntities } = departmentsAdapter.getSelectors();

export const selectDepartmentsLoaded = createSelector(
  selectDepartmentsState,
  (state: DepartmentsState) => state.loaded
);

export const selectDepartmentsError = createSelector(
  selectDepartmentsState,
  (state: DepartmentsState) => state.error
);

export const selectAllDepartments = createSelector(
  selectDepartmentsState,
  (state: DepartmentsState) => selectAll(state)
);

export const selectDepartmentsEntities = createSelector(
  selectDepartmentsState,
  (state: DepartmentsState) => selectEntities(state)
);

export const selectSelectedId = createSelector(
  selectDepartmentsState,
  (state: DepartmentsState) => state.selectedId
);

export const selectEntity = createSelector(
  selectDepartmentsEntities,
  selectSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);

import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import * as DepartmentsActions from '../actions/departments.actions';
import { DepartmentsEntity } from '../models/departments.models';

export const DEPARTMENTS_FEATURE_KEY = 'departments';

export interface DepartmentsState extends EntityState<DepartmentsEntity> {
  selectedId?: string | number; // which Departments record has been selected
  loaded: boolean; // has the Departments list been loaded
  error?: string | null; // last known error (if any)
}

export interface DepartmentsPartialState {
  readonly [DEPARTMENTS_FEATURE_KEY]: DepartmentsState;
}

export const departmentsAdapter: EntityAdapter<DepartmentsEntity> =
  createEntityAdapter<DepartmentsEntity>();

export const initialDepartmentsState: DepartmentsState =
  departmentsAdapter.getInitialState({
    // set initial required properties
    loaded: false,
  });

const reducer = createReducer(
  initialDepartmentsState,
  on(DepartmentsActions.initDepartments, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(DepartmentsActions.loadDepartmentsSuccess, (state, { departments }) =>
    departmentsAdapter.setAll(departments, { ...state, loaded: true })
  ),
  on(DepartmentsActions.loadDepartmentsFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function departmentsReducer(
  state: DepartmentsState | undefined,
  action: Action
) {
  return reducer(state, action);
}

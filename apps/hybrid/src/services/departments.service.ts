import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DepartmentsEntity } from '../models/departments.models';

const departments: DepartmentsEntity[] = [
  {
    id: '1',
    name: 'R&D',
    employers: ['uuid1', 'uuid2'],
  },
  {
    id: '2',
    name: 'Support',
    employers: ['uuid3', 'uuid4'],
  },
];

@Injectable({
  providedIn: 'root',
})
export class DepartmentsService {
  getDepartments = (): Observable<DepartmentsEntity[]> => {
    return of(departments);
  };
}

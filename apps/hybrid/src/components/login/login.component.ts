import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { loginInit } from '../../actions/profile.actions';
import { User } from '../../models/user.models';
import {
  selectProfileLoader,
  selectProfileUser,
} from '../../selectors/profile.selectors';

@Component({
  selector: 'hybrid-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  isLoading$: Observable<boolean>;
  user$: Observable<User | null>;
  subscriptions: Subscription[] = [];

  constructor(private router: Router, private store: Store) {
    this.isLoading$ = store.select(selectProfileLoader);
    this.user$ = store.select(selectProfileUser);
  }

  ngOnInit(): void {
    this.subscriptions.push(
      this.user$.subscribe((user) => {
        if (user) {
          this.router.navigate(['dashboard']);
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }

  onLogin() {
    this.store.dispatch(loginInit());
  }
}

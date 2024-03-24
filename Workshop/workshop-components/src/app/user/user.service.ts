import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserForAuth } from '../types/user';
import { BehaviorSubject, Subscription, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService implements OnDestroy {
  user: UserForAuth | undefined;
  USER_KEY = '[user]';

  userSubscription: Subscription;
  private user$$ = new BehaviorSubject<UserForAuth | undefined>(undefined);
  private user$ = this.user$$.asObservable();

  constructor(private http: HttpClient) {
    this.userSubscription = this.user$.subscribe((user) => {
      this.user = user;
    });
  }

  get isLogged(): boolean {
    return !!this.user;
  }

  getProfile() {
    return this.http
      .get<UserForAuth>('/api/users/profile')
      .pipe(tap((user) => this.user$$.next(user)));
  }

  updateProfile(username: string, email: string, tel?: string) {
    return this.http
      .put<UserForAuth>('/api/users/profile', {
        username,
        email,
        tel,
      })
      .pipe(tap((user) => this.user$$.next(user)));
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

  login(email: string, password: string) {
    return this.http.post<UserForAuth>('/api/login', { email, password }).pipe(
      tap((user) => {
        this.user$$.next(user);
      }),
    );
  }

  logout() {
    return this.http
      .post('/api/logout', {})
      .pipe(tap((user) => this.user$$.next(undefined)));
  }

  register(
    username: string,
    tel: string,
    email: string,
    password: string,
    rePassword: string,
  ) {
    return this.http
      .post<UserForAuth>('/api/register', {
        username,
        tel,
        email,
        password,
        rePassword,
      })
      .pipe(
        tap((user) => {
          this.user$$.next(user);
        }),
      );
  }
}

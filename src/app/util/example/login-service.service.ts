import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  private loginSubject: Subject<void> = new Subject();

  public afterLogin: Observable<void> = this.loginSubject.pipe(
    shareReplay(1)
  );

  public get whenLogin(): Observable<void> {

    return this.loginSubject;
  }

  constructor() { }

  login(user: string, pass: string) {

    this.loginSubject.next();
  }

}

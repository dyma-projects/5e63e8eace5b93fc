import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public users$: BehaviorSubject<string[] | []> = new BehaviorSubject<
    string[] | []
  >([]);

  public addUser(username: string):void {
    this.users$.next([...this.users$.value, username]);
  }

  constructor() {}
}

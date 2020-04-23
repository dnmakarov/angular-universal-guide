import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { UserInterface } from '@interfaces/user.interface';
import { UsersListResponse } from '@interfaces/users-list.response';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from '../../../app/services/api.service';

@Injectable()
export class UsersResolver implements Resolve<UserInterface[]> {

  constructor(
    private apiService: ApiService,
  ) {
  }

  resolve(): Observable<UserInterface[]> {
    return this.apiService.fetchUsers().pipe(
      map((response: UsersListResponse) => response?.data),
    );
  }

}

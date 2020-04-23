import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResourceResponse } from '@interfaces/resource.response';
import { UsersListResponse } from '@interfaces/users-list.response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  private api = 'https://reqres.in/api';

  constructor(
    private http: HttpClient,
  ) { }

  fetchUsers(): Observable<UsersListResponse> {
    const path = `${this.api}/users`;
    return this.http.get<UsersListResponse>(path);
  }

  fetchResources(): Observable<ResourceResponse> {
    const path = `${this.api}/unknown`; // weired endpoint from reqres.in
    return this.http.get<ResourceResponse>(path);
  }
}

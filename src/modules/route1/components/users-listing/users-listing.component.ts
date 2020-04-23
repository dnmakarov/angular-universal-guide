import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserInterface } from '@interfaces/user.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-users-listing',
  templateUrl: './users-listing.component.html',
  styleUrls: ['./users-listing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListingComponent implements OnInit {

  users$: Observable<UserInterface[]> = this.activatedRoute.data.pipe(
    map(data => data.users),
  );

  constructor(
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }

}

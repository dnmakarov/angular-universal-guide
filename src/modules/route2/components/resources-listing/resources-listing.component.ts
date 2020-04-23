import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ResourceInterface } from '@interfaces/resource.interface';
import { ResourceResponse } from '@interfaces/resource.response';
import { merge, Observable, of } from 'rxjs';
import { delay, map, share } from 'rxjs/operators';
import { ApiService } from '../../../../app/services/api.service';

@Component({
  selector: 'app-resources-listing',
  templateUrl: './resources-listing.component.html',
  styleUrls: ['./resources-listing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResourcesListingComponent {

  resources$: Observable<ResourceInterface[]> = merge(
    of(null),
    this.apiService.fetchResources().pipe(
      delay(1500), // to show spinner
      map((response: ResourceResponse) => response.data),
    ),
  ).pipe(
    share<ResourceInterface[]>(),
  );

  constructor(
    private apiService: ApiService,
  ) { }

}

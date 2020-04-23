import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcesListingComponent } from './resources-listing.component';

describe('ResourcesListingComponent', () => {
  let component: ResourcesListingComponent;
  let fixture: ComponentFixture<ResourcesListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourcesListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourcesListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

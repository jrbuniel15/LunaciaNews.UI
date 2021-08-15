import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentManagementListComponent } from './content-management-list.component';

describe('ContentManagementListComponent', () => {
  let component: ContentManagementListComponent;
  let fixture: ComponentFixture<ContentManagementListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentManagementListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentManagementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

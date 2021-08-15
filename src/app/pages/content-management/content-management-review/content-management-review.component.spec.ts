import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentManagementReviewComponent } from './content-management-review.component';

describe('ContentManagementReviewComponent', () => {
  let component: ContentManagementReviewComponent;
  let fixture: ComponentFixture<ContentManagementReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentManagementReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentManagementReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

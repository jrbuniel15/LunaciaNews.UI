import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContentManagementCreateComponent } from './content-management-create.component';

describe('ContentManagementCreateComponent', () => {
  let component: ContentManagementCreateComponent;
  let fixture: ComponentFixture<ContentManagementCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentManagementCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentManagementCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

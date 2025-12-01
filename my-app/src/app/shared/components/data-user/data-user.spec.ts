import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataUser } from './data-user';

describe('DataUser', () => {
  let component: DataUser;
  let fixture: ComponentFixture<DataUser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataUser]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataUser);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserNotifikasiPage } from './user-notifikasi.page';

describe('UserNotifikasiPage', () => {
  let component: UserNotifikasiPage;
  let fixture: ComponentFixture<UserNotifikasiPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UserNotifikasiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

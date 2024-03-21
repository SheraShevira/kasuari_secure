import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminNotifikasiPage } from './admin-notifikasi.page';

describe('AdminNotifikasiPage', () => {
  let component: AdminNotifikasiPage;
  let fixture: ComponentFixture<AdminNotifikasiPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdminNotifikasiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

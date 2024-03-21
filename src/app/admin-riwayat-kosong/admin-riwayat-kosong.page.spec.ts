import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminRiwayatKosongPage } from './admin-riwayat-kosong.page';

describe('AdminRiwayatKosongPage', () => {
  let component: AdminRiwayatKosongPage;
  let fixture: ComponentFixture<AdminRiwayatKosongPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdminRiwayatKosongPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KumpulWargaPage } from './kumpul-warga.page';

describe('KumpulWargaPage', () => {
  let component: KumpulWargaPage;
  let fixture: ComponentFixture<KumpulWargaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(KumpulWargaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

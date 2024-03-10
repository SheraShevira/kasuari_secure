import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KumpulWargaNotificationPage } from './kumpul-warga-notification.page';

describe('KumpulWargaNotificationPage', () => {
  let component: KumpulWargaNotificationPage;
  let fixture: ComponentFixture<KumpulWargaNotificationPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(KumpulWargaNotificationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BencanaAlamNotificationPage } from './bencana-alam-notification.page';

describe('BencanaAlamNotificationPage', () => {
  let component: BencanaAlamNotificationPage;
  let fixture: ComponentFixture<BencanaAlamNotificationPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BencanaAlamNotificationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

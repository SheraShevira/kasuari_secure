import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KejahatanNotificationPage } from './kejahatan-notification.page';

describe('KejahatanNotificationPage', () => {
  let component: KejahatanNotificationPage;
  let fixture: ComponentFixture<KejahatanNotificationPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(KejahatanNotificationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

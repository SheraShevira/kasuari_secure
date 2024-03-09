import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HistoryNotificationsPage } from './history-notifications.page';

describe('HistoryNotificationsPage', () => {
  let component: HistoryNotificationsPage;
  let fixture: ComponentFixture<HistoryNotificationsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HistoryNotificationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

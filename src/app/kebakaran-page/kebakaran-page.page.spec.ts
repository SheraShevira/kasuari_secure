import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KebakaranPagePage } from './kebakaran-page.page';

describe('KebakaranPagePage', () => {
  let component: KebakaranPagePage;
  let fixture: ComponentFixture<KebakaranPagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(KebakaranPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

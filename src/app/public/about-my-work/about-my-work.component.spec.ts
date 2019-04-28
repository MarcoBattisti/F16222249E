import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMyWorkComponent } from './about-my-work.component';

describe('AboutMyWorkComponent', () => {
  let component: AboutMyWorkComponent;
  let fixture: ComponentFixture<AboutMyWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutMyWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMyWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

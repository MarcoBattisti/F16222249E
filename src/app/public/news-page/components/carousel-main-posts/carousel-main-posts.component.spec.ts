import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselMainPostsComponent } from './carousel-main-posts.component';

describe('CarouselMainPostsComponent', () => {
  let component: CarouselMainPostsComponent;
  let fixture: ComponentFixture<CarouselMainPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselMainPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselMainPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

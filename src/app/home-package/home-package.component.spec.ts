import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePackageComponent } from './home-package.component';

describe('HomePackageComponent', () => {
  let component: HomePackageComponent;
  let fixture: ComponentFixture<HomePackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePackageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

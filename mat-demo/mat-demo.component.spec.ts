import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDemoComponent } from './mat-demo.component';

describe('MatDemoComponent', () => {
  let component: MatDemoComponent;
  let fixture: ComponentFixture<MatDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPECComponent } from './details-pec.component';

describe('DetailsPECComponent', () => {
  let component: DetailsPECComponent;
  let fixture: ComponentFixture<DetailsPECComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsPECComponent]
    });
    fixture = TestBed.createComponent(DetailsPECComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

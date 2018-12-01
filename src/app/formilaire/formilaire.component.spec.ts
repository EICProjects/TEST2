import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormilaireComponent } from './formilaire.component';

describe('FormilaireComponent', () => {
  let component: FormilaireComponent;
  let fixture: ComponentFixture<FormilaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormilaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormilaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

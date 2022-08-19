import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsproductoComponent } from './detailsproducto.component';

describe('DetailsproductoComponent', () => {
  let component: DetailsproductoComponent;
  let fixture: ComponentFixture<DetailsproductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsproductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsproductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

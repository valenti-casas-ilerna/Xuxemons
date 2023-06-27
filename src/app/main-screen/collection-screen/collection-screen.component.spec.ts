import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionScreenComponent } from './collection-screen.component';

describe('CollectionScreenComponent', () => {
  let component: CollectionScreenComponent;
  let fixture: ComponentFixture<CollectionScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectionScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollectionScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

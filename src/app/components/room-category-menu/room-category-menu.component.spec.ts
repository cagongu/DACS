import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomCategoryMenuComponent } from './room-category-menu.component';

describe('RoomCategoryMenuComponent', () => {
  let component: RoomCategoryMenuComponent;
  let fixture: ComponentFixture<RoomCategoryMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoomCategoryMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoomCategoryMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

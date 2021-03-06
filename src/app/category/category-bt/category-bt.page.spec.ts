import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CategoryBtPage } from './category-bt.page';
import { RouterModule } from '@angular/router';

describe('CategoryBtPage', () => {
  let component: CategoryBtPage;
  let fixture: ComponentFixture<CategoryBtPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryBtPage ],
      imports: [
        IonicModule.forRoot(),
        RouterModule.forRoot([]),
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CategoryBtPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { FlotavehicularComponent } from './flotavehicular.component';

describe('FlotavehicularComponent', () => {
  let component: FlotavehicularComponent;
  let fixture: ComponentFixture<FlotavehicularComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FlotavehicularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlotavehicularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});

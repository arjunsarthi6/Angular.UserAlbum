import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { UserlistComponent } from './userlist.component';
import { By } from "@angular/platform-browser";

describe('UserlistComponent', () => {
  let component: UserlistComponent;
  let fixture: ComponentFixture<UserlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserlistComponent],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(UserlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    component.ngOnInit();
    await fixture.whenStable();
  });


  it('testing html element class access', () => {
    const data = fixture.nativeElement;
    expect(data.querySelector(".table").textContent).toContain("Name");
  });

  it('should have white background <h2>', () => {
    const h2: HTMLElement = fixture.nativeElement.querySelector('h2');
    const bgColor = h2.style.backgroundColor;
    expect(bgColor).toBe('white');
  });

  it('should verify your test', () => {
    expect(component.ngOnInit).toBeTruthy;
  });
  
});

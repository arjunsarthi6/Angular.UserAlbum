import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { AlbumComponent } from './album.component';
import { By } from "@angular/platform-browser";

describe('AlbumComponent', () => {
  let component: AlbumComponent;
  let fixture: ComponentFixture<AlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumComponent ],
      imports:[HttpClientTestingModule, RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have white background <h2>', () => {
    const h2: HTMLElement = fixture.nativeElement.querySelector('h2');
    const bgColor = h2.style.backgroundColor;
    expect(bgColor).toBe('white');
  });

  it('should verify component has ngOnInit', () => {
    expect(component.ngOnInit).toBeTruthy;
  });

  it('should render the hero name in an anchor tag (using DebugElement)', () => {
    fixture.componentInstance.allAlbums =[{ id: 1,  title: "xyz", userId: 1 }] ;
    fixture.detectChanges();
    const de = fixture.debugElement.query(By.css('.desc')); /*?*/
    expect(de.nativeElement.textContent).toContain('xyz');
  });

  it('should have white background <h2>', () => {
    const h2: HTMLElement = fixture.nativeElement.querySelector('h2');
    const bgColor = h2.style.backgroundColor;
    expect(bgColor).toBe('white');
  });
});

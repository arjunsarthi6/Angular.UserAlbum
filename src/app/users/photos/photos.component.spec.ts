import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { PhotosComponent } from './photos.component';
import { By } from "@angular/platform-browser";

describe('PhotosComponent', () => {
  let component: PhotosComponent;
  let fixture: ComponentFixture<PhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotosComponent ],
      imports:[HttpClientTestingModule, RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should check for the component definition', () => {
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
    fixture.componentInstance.allPhotos =[{ id: 1, albumId: 1, title: "xyz", url:"http://xzy.com", thumbnailUrl:"https://yzx.com" }] ;
    fixture.detectChanges();
    const de = fixture.debugElement.query(By.css('.desc')); /*?*/
    expect(de.nativeElement.textContent).toContain('xyz');
  });
});

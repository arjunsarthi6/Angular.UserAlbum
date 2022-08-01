import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { UsersService } from './users.service';

describe('getAlbum Service', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let getService: UsersService;
  let Albums = [
    {
      userId: 1,
      id: 1,
      title: 'title 1',
    },
    {
      userId: 2,
      id: 1,
      title: 'title 2',
    },
    {
      userId: 3,
      id: 1,
      title: 'title 3',
    },
  ];
  beforeEach(() => {
    let httpClientSpyObj = jasmine.createSpyObj('HttpClient', ['get']);
    TestBed.configureTestingModule({
      providers: [
        UsersService,
        {
          provide: HttpClient,
          useValue: httpClientSpyObj,
        },
      ],
    });
    getService = TestBed.inject(UsersService);
    httpClientSpy = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
  });

  describe('getAlbums()', () => {
    it('should return expected albums when getAlbums is called', (done: DoneFn) => {
      httpClientSpy.get.and.returnValue(of(Albums));
      getService.getAlbums(1).subscribe({
        next: (albums) => {
          expect(albums).toEqual(Albums);
          done();
        },
        error: () => {
          done.fail;
        },
      });
      expect(httpClientSpy.get).toHaveBeenCalledTimes(1);
    });
  });
});
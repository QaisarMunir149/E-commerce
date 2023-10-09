import { TestBed } from '@angular/core/testing';

import { UserdataService } from './usersdata.service';
import { Subject } from 'rxjs';

describe('UserdataService', () => {
  let service: UserdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

// userName=new Subject<any>()




});


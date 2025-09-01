import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppdataService {
  members = Array<Member_>();
  constructor() { }
}

export class Member_ {
  id : number = 0;
  fullname : string = '';
  image : string = '';
}

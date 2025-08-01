import { Component } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-nav',
  imports: [],
  templateUrl: './nav.html',
  styleUrl: './nav.css'
})
export class Nav {
  constructor(private location: Location){}


  public goback(){
    this.location.back();
  }
}

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test',
  imports: [],
  templateUrl: './test.html',
  styleUrl: './test.css'
})
export class Test {
  id = '';
  name = '';
  constructor(private ac: ActivatedRoute){
    ac.queryParamMap.subscribe( (params) => {
      this.name = this.ac.snapshot.queryParamMap.get('name') || 'No name';
    })
  }

}

import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Member,Game } from '../../interface/member';
import myData from '../../../assets/data/member.json' assert { type: 'json' };
import mygame from '../../../assets/data/games.json' assert { type: 'json' };
@Component({
  selector: 'app-data-tranfer',
  imports: [],
  templateUrl: './data-tranfer.html',
  styleUrl: './data-tranfer.css'
})
export class DataTranfer {
  constructor(private http: HttpClient) { }

  getData(): Member[] {
    return myData;
  }

  getgame(): Game[] {
    return mygame;
  }
}

import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Des, place, TripGetResponse, TripPage, TripReq } from '../../interface/trips_get_res';
import { CallApi } from '../call-api/call-api';
import { ApiCall } from '../../service/api-call';
import { lastValueFrom } from 'rxjs';
import { FormsModule } from '@angular/forms'; // <-- ต้อง import
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-details',
  imports: [FormsModule,CommonModule, MatButtonModule, HttpClientModule],
  templateUrl: './details.html',
  styleUrl: './details.css'
})
export class Details {
  idx!:string;
  isOpen=false;
  dataId!: TripPage;
  data!: TripGetResponse;
  trip_req:TripReq= {
    name: '',
    country: '',
    destinationid: 0,
    coverimage: '',
    detail: '',
    price: 0,
    duration: 1
  };

   des!:Des[];
    place : place[] | undefined;
  constructor(private activeatedRoute: ActivatedRoute,private router: Router,private sanitizer: DomSanitizer,private apiCall:ApiCall) {
    activeatedRoute.queryParamMap.subscribe(() => {
      this.idx =
        this.activeatedRoute.snapshot.queryParamMap.get('idx') || "1";
    });
    
  }
  ngOnInit(){
    this.doGetId()
    this.getplace();
    this.doDes();
     
  }
  async doGetId() {
    this.dataId = await lastValueFrom(this.apiCall.getId(this.idx));
    this.data = this.dataId.data[0];
    this.trip_req.name = this.data.name;
     this.trip_req.country = this.data.country;
     this.trip_req.destinationid = this.data.destinationid;
     this.trip_req.coverimage = this.data.coverimage;
     this.trip_req.detail = this.data.detail;
     this.trip_req.price = this.data.price;
     this.trip_req.duration = this.data.duration;
    console.log(this.data)
  }

  open() {
    this.isOpen = true;  
  }

  close() {
    this.isOpen = false;
  }

   async getplace(){
    
    this.place = await lastValueFrom(this.apiCall.getplace());
    
  }

    async doDes(){
    this.des = await lastValueFrom(this.apiCall.getplace_())
  }

  async update(){
    await this.apiCall.puttrips(this.trip_req,this.idx);
    window.location.reload();
  }
  async onClickApply() {
    const isConfirmed = window.confirm('คุณต้องการ ลบ ใช่หรือไม่?');

    if (isConfirmed) {
      await this.apiCall.deleteplace(this.idx);
      this.router.navigate(['/trips']);
      
    } else {
      console.log('ผู้ใช้ยกเลิกการทำงาน');
    }
  }

}

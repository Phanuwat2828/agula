import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from '../../env';
import { last, lastValueFrom } from 'rxjs';
import { ApiCall } from '../../service/api-call';
import { RouterModule,Router,RouterLink,RouterOutlet } from '@angular/router';
import { Des, TripGetResponse, TripPage,TripReq,place } from '../../interface/trips_get_res';
import { FormsModule } from '@angular/forms'; // <-- ต้อง import
@Component({
  selector: 'app-call-api',
  imports: [CommonModule, MatButtonModule, HttpClientModule, FormsModule],
  templateUrl: './call-api.html',
  styleUrl: './call-api.css'
})

export class CallApi {
  page = 1;
  limit = 10;
  total = 0;
  totalPages = 0;
  trips: TripPage | undefined;
  data: TripGetResponse[] | undefined;
  dataId: TripGetResponse | undefined;
  loading = false;
  isOpen=false;
  errorMsg = '';
  status = '';
  name = '';
  id='';
  des!:Des[];
  place : place[] | undefined;
  selectedCountry! : string ;
  country!:string;
  destinationid!:number;

  // =========== add data ===========
  trip_req: TripReq = {
    name: '',
    country: '',
    destinationid: 0,
    coverimage: '',
    detail: '',
    price: 0,
    duration: 1
  };

  constructor(private apiCall: ApiCall,private router: Router) {
   
  }
  
  open() {
    this.isOpen = true;  
  }

  close() {
    this.isOpen = false;
  }


  ngOnInit(): void {
     this.doSearch(1);
     this.getplace();
     this.doDes()
  }

  async Addtrip(){
    console.log(this.trip_req)
    await this.apiCall.posttrips(this.trip_req);
    this.close();
     window.location.reload();
  }


  async doDes(){
    this.des = await lastValueFrom(this.apiCall.getplace_())
  }
  async doSearch( page:number=1) {
    this.status = 'search';
    this.id = "";
    this.selectedCountry = ""
    this.trips = await lastValueFrom(this.apiCall.getSearch(this.name, page));
    this.applyResponse(this.trips!);
  }

  async getplace(){
    
    this.place = await lastValueFrom(this.apiCall.getplace());
    
  }

  async reset(){
    this.status = '';
    this.id = "";
    this.name = "";
    this.doSearch(1);
  }

  async doGetId() {
    this.status = 'getid';
    this.name = '';
    this.selectedCountry = ""
    this.trips = await lastValueFrom(this.apiCall.getId(this.id));
    this.applyResponse(this.trips!);
  }

  redirect(id:number){
    this.router.navigate(['/details'], {
      queryParams: { idx: id }

    });
  }

  private applyResponse(res: TripPage) {
    this.page = res.page;
    this.limit = res.limit;
    this.total = res.total;
    this.totalPages = res.totalPages;
    this.data = res.data;
    console.log(this.data);
  }

  
  async doCountry(){
    this.status = '';
    this.id = "";
    this.name = "";
    console.log('ประเทศที่เลือก:', this.selectedCountry);

    this.trips = await lastValueFrom(this.apiCall.postplace(this.selectedCountry));
    this.applyResponse(this.trips!);
  }

  goPage(p: number) {
    if (p < 1 || p > this.totalPages) return;
    this.page = p;
    if (this.status === 'getid') return;
    this.doSearch(this.page);
    
  }
    thb(n: number): string {
    return new Intl.NumberFormat('th-TH', { style: 'currency', currency: 'THB' }).format(n);
  }

  short(text: string, max = 140): string {
    if (!text) return '';
    return text.length > max ? text.slice(0, max - 1) + '…' : text;
  }

  imageOrFallback(url: string): string {
    if (!url || /^https?:\/\//.test(url) === false) {
      return 'https://placehold.co/600x400?text=No+Image';
    }
    return url;
  }

  pagesToShow(): number[] {
    const start = Math.max(1, this.page - 2);
    const end = Math.min(this.totalPages, this.page + 2);
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  }
}


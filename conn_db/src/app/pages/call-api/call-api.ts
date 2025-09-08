import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from '../../env';
import { lastValueFrom } from 'rxjs';
import { ApiCall } from '../../service/api-call';
import { TripGetResponse, TripPage } from '../../interface/trips_get_res';
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
  errorMsg = '';
  status = '';
  name = '';
  id='';

  constructor(private apiCall: ApiCall) {
   
  }

  ngOnInit(): void {
     this.doSearch(1);
  }

  async doSearch( page:number=1) {
    this.status = 'search';
    this.id = "";
    this.trips = await lastValueFrom(this.apiCall.getSearch(this.name, page));
    this.applyResponse(this.trips);
  }

  async doGetId() {
    this.status = 'getid';
    this.name = '';
    this.page = 1;
    this.limit = 10;
    this.total = 1;
    this.totalPages = 1;
    this.dataId = await lastValueFrom(this.apiCall.getId(this.id));
    this.data = [this.dataId];
    console.log(this.data);
  }

  private applyResponse(res: TripPage) {
    this.page = res.page;
    this.limit = res.limit;
    this.total = res.total;
    this.totalPages = res.totalPages;
    this.data = res.data;
    console.log(this.data);
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


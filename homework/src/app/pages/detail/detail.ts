import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Nav } from '../../components/nav/nav';
import myData from '../../../assets/data.json';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { RouterModule,Router,RouterLink,RouterOutlet } from '@angular/router';
interface Movie_type {
  name: string;
  midb: number;
  image: string;
  image_bg: string;
  detail: string;
  vidoe: string;
  creator: Creator[];
}
interface Creator {
  name: string;
  image: string;
}
@Component({
  selector: 'app-detail',
  imports: [Nav,CommonModule],
  templateUrl: './detail.html',
  styleUrl: './detail.css'
})
export class Detail {
  videoUrl!: SafeResourceUrl;
  id!:string;
  data_show: any;
  jsonData: { [key: string]: Movie_type }= {};
  constructor(private activeatedRoute: ActivatedRoute,private router: Router,private sanitizer: DomSanitizer) {
    activeatedRoute.queryParamMap.subscribe((params) => {
      this.id =
        this.activeatedRoute.snapshot.queryParamMap.get('id') || '';
    });
  }

  ngOnInit() {
    this.jsonData = myData;
    this.data_show = this.jsonData["movie"+this.id];
    const rawUrl = this.data_show.vidoe;
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(rawUrl);
    if(this.data_show==null){
      this.router.navigate(['/pagenotfound']);
    }
    
  }
 



}

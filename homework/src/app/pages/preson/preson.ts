import { Component } from '@angular/core';
import { Nav } from '../../components/nav/nav';
import myData from '../../../assets/data.json';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { RouterModule,Router,RouterLink,RouterOutlet } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

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
  role:string;
  title:string;
  age:number | string;

}

@Component({
  selector: 'app-preson',
  imports: [Nav],
  templateUrl: './preson.html',
  styleUrl: './preson.css'
})
export class Preson {
   videoUrl!: SafeResourceUrl;
  id!:string;
  index!:number | string;
  data_show: any;
  creator!:Creator;
  jsonData: { [key: string]: Movie_type }= {};
  constructor(private activeatedRoute: ActivatedRoute,private router: Router,private sanitizer: DomSanitizer) {
    activeatedRoute.queryParamMap.subscribe((params) => {
      this.id =
        this.activeatedRoute.snapshot.queryParamMap.get('id') || '';
      this.index = this.activeatedRoute.snapshot.queryParamMap.get('index')||"";
    });
  }

  ngOnInit() {
    this.jsonData = myData;
    this.data_show = this.jsonData["movie"+this.id];
    this.creator=this.data_show['creator'][this.index];
    const rawUrl = this.data_show.vidoe;
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(rawUrl);
    if(this.data_show==null){
      this.router.navigate(['/pagenotfound']);
    }
    
  }
}

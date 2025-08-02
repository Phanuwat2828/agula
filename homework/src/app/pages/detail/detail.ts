import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Nav } from '../../components/nav/nav';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { RouterModule,Router,RouterLink,RouterOutlet } from '@angular/router';
import { Movie_type } from '../../interface/movie-interface';
import { DataService } from '../../service/datajson/datajson';
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
  constructor(private activeatedRoute: ActivatedRoute,private router: Router,private sanitizer: DomSanitizer,private dataservice:DataService) {
    activeatedRoute.queryParamMap.subscribe((params) => {
      this.id =
        this.activeatedRoute.snapshot.queryParamMap.get('id') || '';
    });
  }

  ngOnInit() {
    this.jsonData = this.dataservice.getData();
    this.data_show = this.jsonData["movie"+this.id];
    const rawUrl = this.data_show.vidoe;
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(rawUrl);
    if(this.data_show==null){
      this.router.navigate(['/pagenotfound']);
    }
    
  }
  redirect_preson(index:number){
    this.router.navigate(['/preson'], {
      queryParams: { id: this.id ,index:index}

    });
  }

}

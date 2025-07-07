import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate, stagger, query } from '@angular/animations';

interface Trip {
  idx: number;
  name: string;
  country: string;
  destinationId: number;
  coverimage: string;
  detail: string;
  price: number;
  duration: number;
}

@Component({
  selector: 'app-datatrips',
  standalone: true,           // ถ้าเป็น standalone component
  imports: [CommonModule],     // ดึง NgIf, NgFor ฯลฯ มาใช้
  templateUrl: './datatrips.html',
  styleUrls: ['./datatrips.scss'],
  animations: [
    trigger('cardAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.9)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
      ])
    ]),
    trigger('itemAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class DatatripsComponent implements OnInit {
  url = 'http://localhost:3000/trip';
  tripData!: Trip[];
  isLoading = true;
  errorMsg = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // ดึง id จาก query param: ?id=1
    this.route.queryParamMap.subscribe(params => {
      const idParam = params.get('id');
      const id = idParam ? +idParam : null;

      if (id !== null) {
        this.load(id);
      } else {
        this.load_();
      }
    });
  }

  private async load(id: number): Promise<void> {
    const uri = `${this.url}?id=${id}`;
    try {
      const response = await fetch(uri);
      if (!response.ok) throw new Error(`Status ${response.status}`);
      this.tripData = await response.json() as Trip[];
      console.log(this.tripData)
    } catch (err: any) {
      this.errorMsg = err.message || 'Load failed';
    } finally {
      
      this.isLoading = false;
    }
  }

  private async load_(): Promise<void> {
    const uri = `${this.url}`;
    try {
      const response = await fetch(uri);
      if (!response.ok) throw new Error(`Status ${response.status}`);
      this.tripData = await response.json() as Trip[];
      console.log(this.tripData)
    } catch (err: any) {
      this.errorMsg = err.message || 'Load failed';
    } finally {
      
      this.isLoading = false;
    }
  }
    getInfoItems(trip: Trip) {
      return [
        { label: 'รหัสทริป',    value: trip.idx },
        { label: 'Destination', value: trip.destinationId ?? '-' },
        { label: 'Duration',    value: `${trip.duration} วัน` },
        { label: 'Price',       value: `${trip.price.toLocaleString()} THB` }
      ];
    }
  



}



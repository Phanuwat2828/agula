import { Component } from '@angular/core';

@Component({
  selector: 'app-member',
  imports: [],
  templateUrl: './member.html',
  styleUrl: './member.css'
})
export class Member {
  name: string = localStorage.getItem('fullname') || 'Guest';
  email: string = localStorage.getItem('email') || 'guest@example.com';
  role: string = localStorage.getItem('role') || 'User';
  image: string = localStorage.getItem('image') || 'https://via.placeholder.com/150';
}

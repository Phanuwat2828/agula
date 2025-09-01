import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-nav',
  imports: [CommonModule],  
  templateUrl: './nav.html',
  styleUrl: './nav.css'
})
export class Nav {
  constructor(private router: Router,private location: Location) {
    // localStorage.setItem('id_user', '123'); 
    // localStorage.removeItem("id_user"); 
  }
  name: string = localStorage.getItem('fullname') || 'Guest';
  // image: string = localStorage.getItem('image');
  
  
  isLoggedIn(): boolean {
    return !!localStorage.getItem('id_user');
  }
  redirect(path: string): void {
    this.router.navigate([path]);
  }
  public goback(){
    this.location.back();
  }
  logout(): void {
    localStorage.removeItem('id_user');
    localStorage.removeItem('role');
    localStorage.removeItem('fullname');
    localStorage.removeItem('image');
    alert('Logout successful!');
    this.router.navigate(['/login']);
  }
}

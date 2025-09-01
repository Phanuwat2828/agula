import { Component } from '@angular/core';
import { Member } from '../../interface/member';
import { DataTranfer } from '../../services/data-tranfer/data-tranfer';
import { Location } from '@angular/common';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // <-- ต้อง import
@Component({
  selector: 'app-login',
  imports: [CommonModule,FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  data: Member[];
  email: string = '';
  password: string = '';
  constructor(private dataTranfer: DataTranfer,private location: Location) {
    this.data = dataTranfer.getData();
  }
  login(): void {
    const user = this.data.find(u => u.email === this.email && u.password === this.password);
    if (user) {
      localStorage.setItem('id_user', user.id.toString());
      localStorage.setItem('role', user.role);
      localStorage.setItem('fullname', user.fullname);
      localStorage.setItem('image', user.image);
      alert('Login successful!');
      window.location.href = '/home'; // เปลี่ยนเส้นทางไปยังหน้า home
    } else {
      alert('Invalid email or password');
    }
  }
   public goback(){
    this.location.back();
  }
}

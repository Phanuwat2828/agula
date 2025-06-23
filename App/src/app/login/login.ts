import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})

export class LoginComponent {
  email: string = '';
  password: string = '';

  onLogin() {
    console.log('Email:', this.email);
    console.log('Password:', this.password);

    if (this.email && this.password) {
      alert(`ยินดีต้อนรับ: ${this.email}`);
    } else {
      alert('กรุณากรอกข้อมูลให้ครบ');
    }
  }
}

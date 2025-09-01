import { Component } from '@angular/core';
import {Game} from '../../interface/member';
import { CommonModule } from '@angular/common';
import { DataTranfer } from '../../services/data-tranfer/data-tranfer';
import { FormsModule } from '@angular/forms'; 
@Component({
  selector: 'app-home',
  imports: [CommonModule,FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  games: Game[] = [];
  id_game: number = 0;
  price: number = 0;
  name: string = localStorage.getItem('fullname') || 'Guest';
  constructor(private dataTransfer: DataTranfer) { 
    this.games = dataTransfer.getgame();
  }
  selectedGame: Game | null = null;
  showGame(game: Game) {
    this.selectedGame = game; 
  }

  closeDetails() {
    this.selectedGame = null; 
  }

  orderGame(): void {
    if (this.selectedGame) {
      alert(`You have ordered:${this.selectedGame.name} ${this.id_game} for ${this.price} บาท`);
      this.closeDetails(); 
      this.id_game = 0;
      this.price = 0;
    }
  }

}

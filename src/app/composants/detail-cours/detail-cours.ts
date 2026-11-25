
import { Component, Input } from '@angular/core';
import { Cours } from '../../donnees/cours';

@Component({
  imports: [],
  selector: 'app-detail-cours',
  templateUrl: './detail-cours.html',
  styleUrl: './detail-cours.css',
})
export class DetailCours {
  @Input() cours: Cours | null = null;
}

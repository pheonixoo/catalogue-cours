
import { Component, Output, EventEmitter, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UpperCasePipe } from '@angular/common';

import { FiltreCoursPipe } from '../../pipes/filtre-cours-pipe';
import { TriCoursPipe } from '../../pipes/tri-cours-pipe';
import { PlacesRestantesPipe } from '../../pipes/places-restantes-pipe';
import { RouterLink } from '@angular/router';
import { Cours } from '../../donnees/cours';
import { Catalogue } from '../../services/catalogue';

@Component({
  imports: [
    FormsModule,
    FiltreCoursPipe,
    TriCoursPipe,
    UpperCasePipe,
    PlacesRestantesPipe,
    RouterLink
  ],
  selector: 'app-liste-cours',
  styleUrl: './liste-cours.css',
  templateUrl: './liste-cours.html',
})
export class ListeCours {

  private catalogue = inject(Catalogue);

  recherche = '';
  tri: 'asc' | 'desc' = 'asc';

  cours: Cours[] = this.catalogue.lister();

  @Output() coursSelectionne = new EventEmitter<Cours>();

  coursActif: Cours | null = null;

  selectionner(c: Cours) {
    this.coursActif = c;
    this.coursSelectionne.emit(c);
  }
}

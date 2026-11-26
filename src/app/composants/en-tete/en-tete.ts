import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Inscriptions } from '../../services/inscriptions';

@Component({
  imports: [RouterLink],
  selector: 'app-en-tete',
  styleUrl: './en-tete.css',
  templateUrl: './en-tete.html',
})
export class EnTete {
  inscriptions = inject(Inscriptions);
}
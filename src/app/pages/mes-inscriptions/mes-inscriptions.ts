import { Component, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Catalogue } from '../../services/catalogue';
import { Inscriptions } from '../../services/inscriptions';
import { Session } from '../../services/session';

@Component({
  selector: 'app-mes-inscriptions',
  imports: [DatePipe, RouterLink],
  templateUrl: './mes-inscriptions.html',
  styleUrl: './mes-inscriptions.css',
})
export class MesInscriptions {

  inscriptions = inject(Inscriptions);
  catalogue = inject(Catalogue);
  session = inject(Session);

}
import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ArtisanService } from '../../services/artisan.service';
import { Artisant } from '../../models/artisantmodèle';

@Component({
  selector: 'app-artisan-detail',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './artisan-detail.html',
  styleUrl: './artisan-detail.css',
})
export class ArtisanDetail {

  // Contient l'artisan sélectionné
  artisant = signal<Artisant | undefined>(undefined);

  // Champs du formulaire
  userName = '';
  subject = '';
  message = '';

  constructor(
    private artisanService: ArtisanService,
    private route: ActivatedRoute
  ) {
    // Écoute les changements d'id dans l'URL
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      const foundArtisant = this.artisanService.getArtisantById(id);

      if (foundArtisant) {
        this.artisant.set(foundArtisant);
      }
    });
  }

  // Simule l'envoi du formulaire
  sendMessage(): void {
    alert('Message envoyé à l’artisan.');

    this.userName = '';
    this.subject = '';
    this.message = '';
  }

  // Retourne un tableau pour afficher les étoiles
  getStars(rate: number): { filled: boolean }[] {
  return Array.from({ length: 5 }, (_, index) => ({
    filled: index < Math.round(rate)
  }));
}
  }


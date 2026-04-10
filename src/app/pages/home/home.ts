import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { StepListComponent } from '../../components/step-list/step-list';
import { ArtisanService } from '../../services/artisan.service';
import { Artisant } from '../../models/artisantmodèle';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [StepListComponent, RouterLink],
  templateUrl: './home.html',
})
export class HomeComponent {

  // Signal contenant tous les artisans
  artisants = signal<Artisant[]>([]);

  // Filtre les artisans "top" et limite à 3
  topArtisants = computed(() =>
    this.artisants().filter(artisant => artisant.top).slice(0, 3)
  );

  constructor(private artisanService: ArtisanService) {
    // On récupère les artisans depuis le service
    this.artisants.set(this.artisanService.getArtisant());
  }

  // Génère les étoiles selon la note
  getStars(rate: number): { filled: boolean }[] {
  return Array.from({ length: 5 }, (_, index) => ({
    filled: index < Math.round(rate)
  }));
}
  }




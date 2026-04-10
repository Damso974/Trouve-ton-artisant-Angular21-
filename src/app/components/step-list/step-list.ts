import { Component, signal } from '@angular/core';
import { StepsService } from '../../services/steps.service';
import { Step } from '../../models/step.modele';
import { StepComponent } from '../step/step';

@Component({
  selector: 'app-step-list',
  standalone: true,
  imports: [StepComponent],
  templateUrl: './step-list.html',
})
export class StepListComponent {

  // Signal contenant toutes les étapes
  steps = signal<Step[]>([]);

  constructor(private stepsService: StepsService) {
    this.steps.set(this.stepsService.getSteps());
  }
}

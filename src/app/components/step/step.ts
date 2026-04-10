import { Component, input } from '@angular/core';
import { Step } from '../../models/step.modele';

@Component({
  selector: 'app-step',
  standalone: true,
  templateUrl: './step.html',
})
export class StepComponent {

  // Reçoit une étape depuis le composant parent
  step = input.required<Step>();
}

import { Component, Input } from '@angular/core';
import { Gasolinera } from '../../../shared/models/gasolinera';

@Component({
  selector: 'app-gasolinera',
  standalone: true,
  imports: [],
  templateUrl: './gasolinera.component.html',
  styleUrl: './gasolinera.component.css'
})
export class GasolineraComponent {

  @Input({ required: true }) gasolinera!: Gasolinera;

}

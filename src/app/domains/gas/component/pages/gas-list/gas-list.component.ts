import { Component, computed, inject, signal } from '@angular/core';
import { GasolineraComponent } from '../../gasolinera/gasolinera.component';
import { ComunidadAutonoma } from '@shared//models/comunidad-autonoma';
import { Provincia } from '@shared/models/provincia';
import { Municipios } from '@shared/models/municipios';
import { GasService } from '@shared//services/gas.service';
import { Gasolinera } from '@shared/models/gasolinera';


@Component({
  selector: 'app-gas-list',
  standalone: true,
  imports: [GasolineraComponent],
  templateUrl: './gas-list.component.html',
  styleUrl: './gas-list.component.css'
})
export class GasListComponent {

  listadoCCAA = signal<ComunidadAutonoma[]>([]);
  listadoProvincias = signal<Provincia[]>([]);
  listadoMunicipios= signal<Municipios[]>([]);
  listadoGasolineras= signal<Gasolinera[]>([]);
  private gasService = inject(GasService);

  ngOnInit() {
    this.gasService.getAllCCAA().subscribe({
      next: (data) => {
        this.listadoCCAA.set(data);
      },
      error: (e) => {
        console.error(e);
      }
    })
  }

  onChangeCCAA(event:Event){
    let input = event.target as HTMLInputElement;
    let idComunidad=input.value;
    this.gasService.getProvinvciaByIDCCAA(idComunidad).subscribe({
      next: (data) => {
        this.listadoProvincias.set(data);
      },
      error: (e) => {
        console.error(e);
      }
    })

  }

  onChangeProvincia(event:Event){
    let input = event.target as HTMLInputElement;
    let id=input.value;
    this.gasService.getMuicipioByIDProvincia(id).subscribe({
      next: (data) => {
        this.listadoMunicipios.set(data);
      },
      error: (e) => {
        console.error(e);
      }
    })
  }

  listadoPorMunicipio = computed(() => {
    let listado = this.listadoGasolineras();

   return listado
  });

  onChangeMunicipio(event:Event){
    let input = event.target as HTMLInputElement;
    let id=input.value;
    this.gasService.getGasByIDMunicipio(id).subscribe({
      next: (data: any) => {
        let listaData=data.ListaEESSPrecio;
        this.listadoGasolineras.set(listaData);
      },
      error: (e) => {
        console.error(e);
      }
    })
  }
}

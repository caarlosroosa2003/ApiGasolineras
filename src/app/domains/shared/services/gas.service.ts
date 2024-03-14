import { Injectable, inject } from '@angular/core';
import { ComunidadAutonoma } from '../models/comunidad-autonoma';
import { HttpClient } from '@angular/common/http';
import { Provincia } from '../models/provincia';
import { Municipios } from '../models/municipios';
import { Gasolinera } from '@shared/models/gasolinera';

@Injectable({
  providedIn: 'root'
})
export class GasService {

  private http = inject(HttpClient);

  getAllCCAA() {
    let url = new URL('https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/Listados/ComunidadesAutonomas/');
    return this.http.get<ComunidadAutonoma[]>(url.toString());
  }

  getProvinvciaByIDCCAA(id:String) {
    let url = new URL('https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/Listados/ProvinciasPorComunidad/'+id);
    return this.http.get<Provincia[]>(url.toString());
  }


  getMuicipioByIDProvincia(id:String) {
    let url = new URL('https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/Listados/MunicipiosPorProvincia/'+id);
    return this.http.get<Municipios[]>(url.toString());
  }

  getGasByIDMunicipio(id:String) {
    let url = new URL('https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/EstacionesTerrestres/FiltroMunicipio/'+id);
    return this.http.get<any[]>(url.toString());
  }

}





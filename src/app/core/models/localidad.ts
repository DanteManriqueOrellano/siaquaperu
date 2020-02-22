import { ICentroEducativo } from './centroeducativo';
import { IFoto } from './foto';
import { ISistemaAgua } from './sistemaagua';

export interface ILocalidad {
    nombreLocalidad:string;
    centrosEducativos:ICentroEducativo[];
    viviendasBeneficiadas:number;
    fotos:IFoto[];
    sistemaAgua:ISistemaAgua
}
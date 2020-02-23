import { IFoto } from './foto';
import { IMantenimiento } from './mantenimiento';
import { IDimension } from './dimencion';

export interface ICaptacion {
    nombreCaptacion:string;
    aforo:string;
    tipoCaptacion:string;
    antiguedad:string;
    mantenimientos:IMantenimiento[];
    funcionamiento:boolean;
    fugaAgua:boolean;
    operativo:boolean;
    fotos:IFoto[];
    materialUtilizado:string;
    dimension:IDimension;
}
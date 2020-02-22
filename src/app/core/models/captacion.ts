import { IFoto } from './foto';
import { IMantenimiento } from './mantenimiento';
import { IMaterialUtilizado } from './materialutilizado';
import { IDimension } from './dimencion';

export interface ICaptacion {
    nombreCaptacion:string;
    aforo:string;
    tipoCaptacion:string;
    antiguedad:string;
    mantenimientos:IMantenimiento[];
    funcionamiento:string;
    fugaAgua:boolean;
    operativo:boolean;
    fotos:IFoto[];
    materialUtilizado:IMaterialUtilizado;
    dimension:IDimension;
}
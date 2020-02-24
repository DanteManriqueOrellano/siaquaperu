import { IResponsable } from './responsable';
import { IUbicacionproyecto } from './ubicacionproyecto';
import { ILimiteProvincia } from './limiteprovincia';
import { ILocalidad } from './localidad';
import { IFoto } from './foto';
import { ICoordenada } from './coordenada';
import { IObjetivoMuni } from './objetivomuni';
import { IObjetivoProy } from './objetivoproy';
import { IViaAcceso } from './viaacceso';
import { CheckboxItem } from './checkbox-item.interface';

export interface IProyecto {
    nombreProyecto:string;
    snip:string;
    dependenciasChk?:CheckboxItem;
    cliente:string;
    aliasProyecto:string;
    anioPriorizacion:string;
    fechaAprobacion:string;
    nroInformeTecnico:string;
    aprobacionPerfil:string;
    responsable:IResponsable;
    ubicacionproyecto:IUbicacionproyecto;
    limiteProvincia:ILimiteProvincia;
    localidades:ILocalidad[];
    fotos:IFoto[];//ubicacion del proyecto en peru y ubicacion del proyecto en la region
    coordenada:ICoordenada;
    objetivosMuni:IObjetivoMuni[];
    objetivosProy:IObjetivoProy[];
    viasAcceso:IViaAcceso[];
}
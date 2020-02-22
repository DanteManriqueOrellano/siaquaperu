import { IIntervencion } from './intervencion';

export interface ISistemaAgua {
    intervenciones:IIntervencion[];
    propuesto:string// se cambiara con la propuesta del nuevo sistema.
}
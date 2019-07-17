import { Action } from '@ngrx/store';

export const LISTAR = '[maestro] Listar';
export const CREAR  = '[maestro] Crear';
export const EDITAR = '[maestro] Editar';

export class ListarMaestroAction implements Action {
    readonly type = LISTAR;
}

export class CrearMaestroAction implements Action {
    readonly type = CREAR;
    constructor(public nombre: string){}
}

export class EditarMaestroAction implements Action {
    readonly type = EDITAR;
    constructor(public codigo: number){}
}

export type Actions = ListarMaestroAction | CrearMaestroAction | EditarMaestroAction;
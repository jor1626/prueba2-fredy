import * as MaestroActions from "./maestro.actions";
import { MaestroClass } from './model/maestro.model';

const maestro1 = new MaestroClass('Clientes');
const maestro2 = new MaestroClass('Usuarios');
const maestro3 = new MaestroClass('Laboratorios');

const estadoInicial: MaestroClass[] = [maestro1, maestro2, maestro3];

export function maestroReducer(state = estadoInicial, action: MaestroActions.Actions ): MaestroClass[]{

    switch (action.type) {
        case MaestroActions.CREAR:
            const maestro = new MaestroClass(action.nombre)
            return [ ...state, maestro];
        case MaestroActions.EDITAR:
            return state.map( editMaestro => {
                if(editMaestro.codigo === action.codigo){
                    return {
                        ...editMaestro,
                        selected: true
                    }
                }else{
                    return {
                        ...editMaestro,
                        selected: false
                    }
                }
            });
        default:
            return state;
    }
}
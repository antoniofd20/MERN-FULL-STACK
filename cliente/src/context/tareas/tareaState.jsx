import React, { useReducer } from 'react'

import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';

import {
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    ESTADO_TAREA,
    TAREA_ACTUAL,
    ACTUALIZAR_TAREA,
    LIMPIAR_TAREA
} from '../../types/index';

const TareaState = props => {

    // Siempre se declara el initialState
    const initialState = {
        tareas: [
            { id: 1, nombre: 'Elegir plataforma', estado: true, proyectoId: 1},
            { id: 2, nombre: 'Elegir colores', estado: false, proyectoId: 2},
            { id: 3, nombre: 'Elegir xd', estado: false, proyectoId: 3},
            { id: 4, nombre: 'Elegir host', estado: true, proyectoId: 4}
        ],
        tareasproyecto: null,
        errortarea: false,
        tareaseleccionada: null
    }

    // Crear dispatch y state
    const [ state, dispatch ] = useReducer(TareaReducer, initialState);

    // Creamos las funciones

    // Obtener las tareas de un proyecto
    const obtenerTareas = proyectoId => {
        dispatch({
            type: TAREAS_PROYECTO,
            payload: proyectoId
        })
    }

    // Agregar una tarea al proyecto seleccionado
    const agregarTarea = tarea => {
        dispatch({
            type: AGREGAR_TAREA,
            payload: tarea
        })
    }

    // Valida y muestra un error en caso de que sea necesario
    const validarTarea = () => {
        dispatch({
            type: VALIDAR_TAREA,
        })
    }

    // ELiminar tarea por id
    const eliminarTarea= id => {
        dispatch({
            type: ELIMINAR_TAREA,
            payload: id
        })
    }

    // Cambia el estado de cada tarea
    const cambiarEstadoTarea = tarea => {
        dispatch({
            type: ESTADO_TAREA,
            payload: tarea
        })
    }

    // Extrae una tarea para edicion
    const guardarTareaActual = tarea => {
        dispatch({
            type: TAREA_ACTUAL,
            payload: tarea
        })
    }

    // Edita o modifica una tarea
    const actualizarTarea = tarea => {
        dispatch({
            type: ACTUALIZAR_TAREA,
            payload: tarea
        })
    }

    // Elimina la tareaseleccionada
    const limpiarTarea = () => {
        dispatch({
            type: LIMPIAR_TAREA
        })
    }

    return (
        <TareaContext.Provider
            value={{
                tareas: state.tareas,
                tareasproyecto: state.tareasproyecto,
                errortarea: state.errortarea,
                tareaseleccionada: state.tareaseleccionada,
                obtenerTareas,
                agregarTarea,
                validarTarea,
                eliminarTarea,
                cambiarEstadoTarea,
                guardarTareaActual,
                actualizarTarea,
                limpiarTarea
            }}
        >
            {props.children}
        </TareaContext.Provider>
    )
}

export default TareaState;
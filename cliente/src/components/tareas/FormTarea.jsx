import React, { useContext, useState } from 'react'

import proyectoContext from '../../context/proyectos/proyectoContext';
import TareaContext from '../../context/tareas/tareaContext';

import { v4 as uuidv4 } from 'uuid';

const FormTarea = () => {
    
    // Extraer si un proyecto esta activo
    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    // Obtener la funcion del context de tarea 
    const tareasContext = useContext(TareaContext);
    const { errortarea, agregarTarea, validarTarea, obtenerTareas } = tareasContext;

    // State del formulario
    const [ tarea, guardarTarea ] = useState({
        nombre: '',
    });

    // Extraer el nombre del proyecto
    const { nombre } = tarea;

    // Si no hay proyecto seleccionado
    if(!proyecto) return null;

    // Array destructuring para extraer el proyecto actual
    const [ proyectoActual ] = proyecto;

    // Leer los valores del formulario
    const handleChange = e => {
        guardarTarea({
            ...tarea,
            [e.target.name] : e.target.value
        });
    }

    const onSubmit = e => {
        e.preventDefault();

        // Validar
        if(nombre.trim() === ''){
            validarTarea();
            return;
        }

        // Agregar la nueva tarea al state de tareas
        tarea.proyectoId = proyectoActual.id;
        tarea.estado = false;
        tarea.id = uuidv4();
        agregarTarea(tarea);

        // Obtener y filtrar las tareas del proyecto actual
        obtenerTareas(proyectoActual.id);


        // Reiniciar el form
        guardarTarea({
            nombre: ''
        })
    }

    return (
        <div className="formulario">
            <form
                onSubmit={onSubmit}
            >
                <div className="contenedor-input">
                    <input 
                        type="text"
                        className="input-text"
                        placeholder="Nombre Tarea..."
                        name="nombre"
                        value={nombre}
                        onChange={handleChange}
                    />
                </div>

                <div className="contenedor-input">
                    <input 
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        value="Agregar Tarea"
                    />
                </div>
            </form>

            { errortarea ? <p className="mensaje error">El nombre de la tarea es obligatorio</p>: null }
        </div>
    );
}
 
export default FormTarea;
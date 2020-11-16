import React, { useContext } from 'react';

import proyectoContext from '../../context/proyectos/proyectoContext';
import TareaContext from '../../context/tareas/tareaContext';

const Proyecto = ({proyecto}) => {

    // Obtener el state del formulario
    const proyectosContext = useContext(proyectoContext);
    const { proyectoActual } = proyectosContext;

    // Obtener la funcion del context de tarea 
    const tareasContext = useContext(TareaContext);
    const {obtenerTareas} = tareasContext;

    // Función para agregar el proyecto actual
    const seleccionarProyecto = id => {
        proyectoActual(id); // Fijar un proyecto actual
        obtenerTareas(id); // Fitrar las tareas cuando se de click
    }

    return (
        <li>
            <button
               type="button"
               className="btn btn-blank"
               onClick= {() => seleccionarProyecto(proyecto._id)}
            >{proyecto.nombre}</button>
        </li>
    );
}
 
export default Proyecto;
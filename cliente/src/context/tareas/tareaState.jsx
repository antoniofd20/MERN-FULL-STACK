import React, { useReducer } from 'react'

import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';

const TareaState = props => {

    // Siempre se declara el initialState
    const initialState = {
        tareas: [],
    }

    // Crear dispatch y state
    const [ state, dispatch ] = useReducer(TareaReducer, initialState);

    return (
        <TareaContext.Provider
            value={{

            }}
        >
            {props.children}
        </TareaContext.Provider>
    )
}

export default TareaState;
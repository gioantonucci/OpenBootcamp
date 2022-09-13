
/**
 * Ejemplo de componente de tipo clase que dispone de los métodos de ciclo de vida
 */

import React, { Component } from 'react';

class LifeCycleExample extends Component {

    constructor(props) {
        super(props) 
            console.log('Constructor')
    }

    componentWillMount() {
        console.log('WillMount: antes del montaje del componente');
    }

    componentDidMount() {
        console.log('DidMount: Justo al acabar el montaje del componente y antes de pintarlo');
    }

    componentWillReceiveProps(nextProps) {
        console.log('WillReceiveProps: Si va a recibir nuevas props');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldUpdate: Controla si el componente debe o no actualizarse. Devuelve un booleano.');
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('WillUpdate: Justo antes de actualizarse ');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('DidUpdate: Componente actualizado ');
    }

    componentWillUnmount() {
        console.log('WillUnmount: Justo antes de desaparecer');
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default LifeCycleExample;

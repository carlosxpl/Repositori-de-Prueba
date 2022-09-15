import React, { Component } from 'react';
import PilasConvencionales from './Pilas';
import BateriasLitio from './Baterias';
import Hidrogeno from './Hidrogeno';
import Likes from './Likes';
import Bitcoin from './pure/Bitcoin';


class Articulo extends Component {

    render() {
        return (
            <div className='mx-3'>
                <PilasConvencionales />
                <BateriasLitio />
                <Hidrogeno />
                <Likes />
                <Bitcoin />
            </div>
        )
    }
}

export default Articulo;
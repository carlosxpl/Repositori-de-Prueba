import React from 'react';
import Autonomia from "./Autonomia";

function PilasConvencionales() {
    return (
        <div>
            <h3>Pilas convencionales</h3>
            <p>
                A pesar del auge de las energias renovables,
                las pilas convencionales siguen utilizandose a diario.
            </p>
            <br />
            <Autonomia km={13} />
        </div>
    );

}

export default PilasConvencionales;
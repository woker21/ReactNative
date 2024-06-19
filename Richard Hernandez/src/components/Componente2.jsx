import PropTypes from 'prop-types';
import { RenderPersonaje } from './styles';

const Componente2 = ({ value, starWarsData }) => {
    return (
        <div>
            <RenderPersonaje>
            <p>El valor introducido en Componente2 es: {value}</p>
            {starWarsData.name && (
                <div>
                    <p>Nombre del personaje de Star Wars: {starWarsData.name}</p>
                    {starWarsData.image && <img src={starWarsData.image} alt={starWarsData.name} style={{ width: '200px', height: 'auto' }} />}
                </div>
            )}
            </RenderPersonaje>
        </div>
    );
};

Componente2.propTypes = {
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    starWarsData: PropTypes.shape({
        name: PropTypes.string,
        image: PropTypes.string,
    }).isRequired,
};

export default Componente2;

import { useState, useRef } from 'react';
import Componente1 from './components/Componente1';
import Componente2 from './components/Componente2';
import { Search } from './components/styles';

const App = () => {
  const [value, setValue] = useState('');
  const [starWarsData, setStarWarsData] = useState({});
  const inputRef = useRef(null);

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    if (newValue === '' || (newValue >= 1 && newValue <= 10)) {
      setValue(newValue);
      console.log(`El valor introducido es: ${newValue}`);
      inputRef.current = newValue;
    }
  };

  const handleFetchStarWarsData = async () => {
    const numValue = Number(inputRef.current);
    if (!numValue || numValue < 1 || numValue > 10) {
      alert('Por favor, introduce un número entre 1 y 10.');
      return;
    }

    try {
      const response = await fetch(`https://swapi.dev/api/people/${numValue}/`);
      const data = await response.json();
      setStarWarsData({
        name: data.name,
        image: `https://starwars-visualguide.com/assets/img/characters/${numValue}.jpg`
      });
    } catch (error) {
      console.error('Error fetching data:', error);
      setStarWarsData({
        name: 'No se encontró ningún personaje.',
        image: ''
      });
    }
  };

  return (
    <div>
      <h1>App Start</h1>
      <Search>
        <input
          type="number"
          value={value}
          onChange={handleInputChange}
          placeholder="Introduce un número"
        />
        <button onClick={handleFetchStarWarsData}>Buscar</button>
      </Search>
      <Componente2 value={value} starWarsData={starWarsData} />
      <Componente1 />
    </div>
  );
};

export default App;

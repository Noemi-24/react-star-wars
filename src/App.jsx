import { useState, useEffect } from 'react';
import './App.css';
import { getAllStarships } from './services/swApi'; 
import StarshipCard from './components/StarshipCard';
import StarshipDetails from './components/StarshipDetails';

const App = () => {
  const [allStarship, setAllStarships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedStarship, setSelectedStarship] = useState(null);

  useEffect(() => {
    // Define an async function inside useEffect
    const getData = async () => {
      try {
        const result = await getAllStarships(); // Call the imported function
        setAllStarships(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    // Call the async function
    getData();
    
    // Optional: add cleanup logic if needed for aborting requests
    return () => {
      // cleanup code
    };
  }, []); // The empty array ensures this runs once when the component mounts

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleItemClick = (starship) => {
    setSelectedStarship(starship);
  };

   return (
    <>
      <header>
        <p>STAR WARS STARSHIPS</p>
      </header>

      <main>
        {allStarship.lenght === 0 ? (
          <p>No Startships Found</p>
        ): (
          <ul>
            {allStarship.map((starship) => (
              <li key={starship.url}>
                <StartshipCard name={starship.name} onClick={() => handleItemClick(starship)}/>
              </li>
            ))}
          </ul>
        )}  

        {selectedStarship && (
          <StarshipDetails 
            name={selectedStarship.name}
            classShip={selectedStarship.starship_class}
            model={selectedStarship.model}
            manufacturer={selectedStarship.manufacturer}
            capacity={selectedStarship.cargo_capacity}
            length={selectedStarship.length}
            crew={selectedStarship.crew}
            passengers={selectedStarship.passengers}
            url={selectedStarship.url}
          />

        )}      
      </main>
    </>
  )
};

export default App;

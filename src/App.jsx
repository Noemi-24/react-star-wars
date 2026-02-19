import { useState, useEffect } from 'react';
import './App.css';
import { getAllStarships } from './services/swApi'; 
import StartshipCard from './components/StartshipCard'

const App = () => {
   const [allStarship, setAllStartships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Define an async function inside useEffect
    const getData = async () => {
      try {
        const result = await getAllStarships(); // Call the imported function
        setAllStartships(result);
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
                <StartshipCard name={starship.name}/>
              </li>
            ))}
          </ul>
        )}        
      </main>
    </>
  )
};

export default App;

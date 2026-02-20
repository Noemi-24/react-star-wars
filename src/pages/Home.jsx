import { useState, useEffect } from 'react';
import { getAllStarships } from '../services/swApi';
import StarshipCard from '../components/StarshipCard';
import Header from '../components/Header';
import './Home.css';

const Home = () => {
  const [allStarship, setAllStarships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

   return (
    <>
      <Header/>
      <main>
          <ul>
            {allStarship.map((starship) => (
              <li key={starship.url}>
                <StarshipCard name={starship.name} url={starship.url}/>
              </li>
            ))}
          </ul>
      </main>
    </>
  )
};

export default Home;

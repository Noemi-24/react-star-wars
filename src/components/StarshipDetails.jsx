import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getStarshipById } from "../services/swApi";
import Header from './Header';

function StarshipDetails(){
  const {id} =useParams();
  const [ship, setShip] = useState(null);
  const [loading, setLoading] = useState(true);  
  const [error, setError] = useState(null);

  useEffect (() => {
    const getData = async () => {
      try {
        const result = await getStarshipById(id); // Call the imported function
        setShip(result);
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
  }, [id]); // The empty array ensures this runs once when the component mounts

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  
    return(
      <>
        <Header/>
        
        <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '15px' }}>
          <h1>{ship.name}</h1><br/>
          <p><strong>Class:</strong> {ship.starship_class}</p>
          <p><strong>Model:</strong> {ship.model}</p>
          <p><strong>Manufacturer:</strong> {ship.manufacturer}</p>
          <p><strong>Capacity:</strong> {ship.capacity}</p>
          <p><strong>Length:</strong> {ship.length} meters</p>
          <p><strong>Crew:</strong> {ship.crew}. Number of personnel needed to run or pilot this starship'</p>
          <p><strong>Passengers:</strong> {ship.passengers}. Number of non-essential people this starship can transpport.</p>
          <p><strong>Resource URL:</strong> {ship.url}</p>
        </div>

        <Link to={'/'}>
          <div>
              <p className="back-home">	&larr; Go back Home</p>
          </div>
        </Link>
      </>
    );
}

export default StarshipDetails;

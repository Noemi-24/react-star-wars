function StarshipDetails({name, classShip, module, manufacturer, capacity, length, crew, passengers, url}){
    return(
        <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '15px' }}>
          <h3>{name} Details</h3>
          <p>{classShip}</p>
          <button onClick={() => setSelectedStarship(null)}>
            Close Details
          </button>
        </div>
    );
}

export default StarshipDetails;
function StarshipDetails({name, class, module, manufacturer, capacity, length, crew, passengers, url}){
    return(
        <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '15px' }}>
          <h3>{selectedStarship.name} Details</h3>
          <p>{selectedStarship.class}</p>
          <button onClick={() => setSelectedStarship(null)}>
            Close Details
          </button>
        </div>
    );
}

export default StarshipDetails;
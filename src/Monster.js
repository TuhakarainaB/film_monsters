function Monster({selectedMonster})
{
    return(
        <div>
            <h1>{selectedMonster.name}</h1>
            <p><img src={selectedMonster.image} alt={selectedMonster.name} /></p>
            <p><strong>Location:</strong> {selectedMonster.location}</p>
            <p><strong>Films:</strong> {selectedMonster.films}</p>
        </div>
    );
}

export default Monster;
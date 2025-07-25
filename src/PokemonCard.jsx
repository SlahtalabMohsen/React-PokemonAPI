function PokemonCard({ pokemon, onClick }) {
  return (
    <div className="pokemon-card" onClick={onClick}>
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        className="pokemon-image"
      />
      <h2 className="pokemon-name">{pokemon.name}</h2>
      <div className="pokemon-types">
        {pokemon.types.map((type) => (
          <span key={type.type.name} className="pokemon-type">
            {type.type.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default PokemonCard;

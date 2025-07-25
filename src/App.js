import { useState, useEffect } from "react";
import PokemonCard from "./PokemonCard";
import "./App.css";

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  // Fetch Pokémon data from PokeAPI
  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=151"
        );
        const data = await response.json();
        const pokemonDetails = await Promise.all(
          data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            return res.json();
          })
        );
        setPokemonList(pokemonDetails);
        setFilteredPokemon(pokemonDetails);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching Pokémon:", error);
        setLoading(false);
      }
    };
    fetchPokemon();
  }, []);

  // Handle search input
  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = pokemonList.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(term)
    );
    setFilteredPokemon(filtered);
  };

  // Handle card click to show details
  const handleCardClick = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  // Close modal
  const closeModal = () => {
    setSelectedPokemon(null);
  };

  return (
    <div className="container">
      <h1 className="title">Pokémon Explorer</h1>

      {/* Search Bar */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search Pokémon..."
          value={searchTerm}
          onChange={handleSearch}
          className="search-input"
        />
      </div>

      {/* Loading State */}
      {loading ? (
        <div className="loading">Loading Pokémon...</div>
      ) : (
        /* Pokémon Grid */
        <div className="pokemon-grid">
          {filteredPokemon.length > 0 ? (
            filteredPokemon.map((pokemon) => (
              <PokemonCard
                key={pokemon.id}
                pokemon={pokemon}
                onClick={() => handleCardClick(pokemon)}
              />
            ))
          ) : (
            <div className="no-results">No Pokémon found</div>
          )}
        </div>
      )}

      {/* Pokémon Details Modal */}
      {selectedPokemon && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>
            <div className="modal-content">
              <img
                src={
                  selectedPokemon.sprites.other["official-artwork"]
                    .front_default || selectedPokemon.sprites.front_default
                }
                alt={selectedPokemon.name}
                className="modal-image"
              />
              <h2 className="modal-title">{selectedPokemon.name}</h2>
              <div className="modal-types">
                {selectedPokemon.types.map((type) => (
                  <span key={type.type.name} className="modal-type">
                    {type.type.name}
                  </span>
                ))}
              </div>
              <div className="modal-stats">
                <h3>Stats</h3>
                {selectedPokemon.stats.map((stat) => (
                  <div key={stat.stat.name} className="stat-item">
                    <span>{stat.stat.name}:</span> {stat.base_stat}
                  </div>
                ))}
              </div>
              <div className="modal-abilities">
                <h3>Abilities</h3>
                {selectedPokemon.abilities.map((ability) => (
                  <span key={ability.ability.name} className="ability-item">
                    {ability.ability.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

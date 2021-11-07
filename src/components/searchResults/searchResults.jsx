import Pet from "../Pets/pet";
import "./search-results.css";
const SearchResults = ({ pets }) => {
    return (
        <div className="search">
            {!pets.length ? (
                <h2>No Pets Found</h2>
            ) : (
                pets.map((pet) => (
                    <Pet
                        name={pet.name}
                        breed={pet.breed}
                        images={pet.images}
                        animal={pet.animal}
                        location={`${pet.city}- ${pet.state}`}
                        key={pet.id}
                        id={pet.id}
                    />
                ))
            )}
        </div>
    );
};
export default SearchResults;

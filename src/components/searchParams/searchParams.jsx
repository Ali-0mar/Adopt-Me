import { useState, useEffect } from "react";
import SearchResults from "../searchResults/searchResults";
import UseBreedList from "../breedList/breedList";
import Header from "../Header/header";
import "./search-params-style.css";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];
const SearchParams = () => {
    const [location, setLocation] = useState("");
    const [animal, setAnimal] = useState("");
    const [breed, setBreed] = useState("");
    const [pets, setPets] = useState([]);
    const [breeds] = UseBreedList(animal);

    useEffect(() => {
        requestPets();
    }, []); //eslint-disable-line react-hooks/exhaustive-deps

    async function requestPets() {
        const response = await fetch(
            `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`,
        );
        const json = await response.json();
        setPets(json.pets);
    }
    return (
        <div>
            <div className="search-params">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        requestPets();
                    }}>
                    <label htmlFor="location">
                        Location
                        <input
                            id="location"
                            name="locaion"
                            onChange={(event) =>
                                setLocation(event.target.value)
                            }
                            value={location}
                            placeholder="Choose Your Location"
                        />
                    </label>
                    <label htmlFor="animal">
                        Animal
                        <select
                            id="animal"
                            value={animal}
                            onChange={(e) => setAnimal(e.target.value)}
                            onBlur={(e) => setAnimal(e.target.value)}>
                            <option>{animal}</option>
                            {ANIMALS.map((animal) => (
                                <option key={animal} value={animal}>
                                    {animal}
                                </option>
                            ))}
                        </select>
                    </label>
                    <label htmlFor="breed">
                        Breed
                        <select
                            id="breed"
                            value={breed}
                            onChange={(e) => setBreed(e.target.value)}
                            onBlur={(e) => setBreed(e.target.value)}>
                            <option />
                            {breeds.map((breed) => (
                                <option key={breed} value={breed}>
                                    {breed}
                                </option>
                            ))}
                        </select>
                    </label>
                    <button type="submit">Submit</button>
                </form>
                <SearchResults pets={pets} />
            </div>
        </div>
    );
};
export default SearchParams;

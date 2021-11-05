import { useState, useEffect } from "react";
const localCash = {};
const UseBreedList = (animal) => {
    const [breedList, setBreedList] = useState([]);
    const [status, setStatus] = useState("unLoaded");

    useEffect(() => {
        if (!animal) {
            setBreedList([]);
        } else if (localCash[animal]) {
            setBreedList(localCash[animal]);
        } else {
            requestBreedList();
        }
        async function requestBreedList() {
            setBreedList([]);
            setStatus("loading");
            const response = await fetch(
                `http://pets-v2.dev-apis.com/breeds?animal=${animal}`,
            );
            const json = await response.json();
            localCash[animal] = json.breeds;
            setBreedList(localCash[animal]);
            setStatus("Loaded");
        }
    }, [animal]);
    return [breedList, status];
};

export default UseBreedList;

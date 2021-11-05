import "./pet-style.css";

const Pet = ({ name, animal, breed }) => (
    <div className="pet">
        <h2>{name}</h2>
        <h3>{animal}</h3>
        <h3>{breed}</h3>
    </div>
);

export default Pet;

import "./FilterCheckbox.css";

export default function FilterCheckbox() {
  return (
    <div className="filter">
      <input className="filter__checkbox" type="checkbox"></input>
      <span className="filter__text">Короткометражки</span>
    </div>
  );
}

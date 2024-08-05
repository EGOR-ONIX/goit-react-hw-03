import css from "./SearchBox.module.css";

function SearchBox({ inputName, setInputName }) {
  const handleChange = (event) => {
    setInputName(event.target.value);
  };
  return (
    <>
      <p>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={inputName}
        onChange={handleChange}
      />
    </>
  );
}

export default SearchBox;

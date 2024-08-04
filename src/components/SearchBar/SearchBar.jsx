import toast, { Toaster } from "react-hot-toast";
import c from "./SearchBar.module.css";

const SearchBar = ({ handleChangeValue }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const topic = form.elements.topic.value;
    if (topic.trim() === "") {
      toast.error("Please enter a name");
      return;
    }
    handleChangeValue(topic);
    form.reset();
  };
  return (
    <div>
      <form className={c.form} onSubmit={handleSubmit}>
        <input className={c.input} placeholder="Search..." type="search" name="topic" />
        <button className={c.button} type="submit">
          Search
        </button>
        <Toaster />
      </form>
    </div>
  );
};

export default SearchBar;

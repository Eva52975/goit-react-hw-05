import toast, { Toaster } from "react-hot-toast";

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
      <form onSubmit={handleSubmit}>
        <input placeholder="Search" type="search" name="topic" />
        <button type="submit">Search</button>
        <Toaster />
      </form>
    </div>
  );
};

export default SearchBar;

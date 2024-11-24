import { IoMdSearch } from "react-icons/io";
import { useGlobalContext } from "../../Context";

const SearchBar = () => {
  const { openModal } = useGlobalContext();
  return (
    <article className="input-section" onClick={() => openModal(1)}>
      <IoMdSearch className="mag-glass" />
      <div className="click-input">
        <span className="where-to">Where to?</span>
        <div className="below-where-to">
          <span>Anywhere</span>
          <span className="gray-dot"></span>
          <span>Any week</span>
          <span className="gray-dot"></span>
          <span>Add guests</span>
        </div>
      </div>
    </article>
  );
};

export default SearchBar;

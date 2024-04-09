import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';
import css from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector(selectNameFilter);

  const handleChange = (e) => {
    const newValue = e.target.value;
    dispatch(changeFilter(newValue));
  }

  return (
    <div className={css.wrapperSearchBox}>
      <p className={css.textSearchBox}>Find contacts by name</p>
      <input 
        type="text" 
        value={searchValue} 
        onChange={handleChange} 
        placeholder="Search..."
      />
    </div>
  );
}

export default SearchBox;
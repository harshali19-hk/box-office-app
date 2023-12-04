import { useState } from 'react';
import { useSearchStr } from '../lib/useSearchStr';
import CustomRadio from './CustomRadio';

const SearchForm = ({onSearch}) => {
    const [searchStr, setSearchStr] = useSearchStr();
    const [searchOption, setSearchOption] = useState('shows');

    const handleInputChange = eve => {
        setSearchStr(eve.target.value);
      };
    
      const onRadioChange = e => {
        setSearchOption(e.target.value);
      };

      const onSubmit =(eve)=>{
        eve.preventDefault();
         const options = {
            q : searchStr,
            searchOption
         }
         onSearch(options)
      }

  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text" value={searchStr} onChange={handleInputChange} />

        <CustomRadio
        label='Shows'
         name="search-option"
         value="shows"
         checked={searchOption === 'shows'}
         onChange={onRadioChange}
        />
        <CustomRadio
        label='Actors'
        name="search-option"
        value="actors"
        checked={searchOption === 'actors'}
        onChange={onRadioChange}
        />



        
        <button type="submit">Search</button>
      </form>
    </>
  )
}

export default SearchForm

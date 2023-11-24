import { useEffect, useState } from 'react';


const SearchForm = ({onSearch}) => {
    const [searchStr, setSearchStr] = useState('');
    const [searchOption, setSearchOption] = useState('shows');

    //console.log("Component outside UseEffect")

    useEffect(()=>{
      console.log("Component inside UseEffect")
    },[])

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
        <label>
          Shows
          <input
            type="radio"
            name="search-option"
            value="shows"
            checked={searchOption === 'shows'}
            onChange={onRadioChange}
          />
        </label>
        <label>
          Actors
          <input
            type="radio"
            name="search-option"
            value="actors"
            checked={searchOption === 'actors'}
            onChange={onRadioChange}
          />
        </label>
        <button type="submit">Search</button>
      </form>
    </>
  )
}

export default SearchForm

import { useState } from 'react';
import { SearchForShows, SearchForPeople } from '../API/TvmazeApi';

const Home = () => {
  const [apiData, setApiData] = useState([]);
  const [apiDataError, setApiDataError] = useState(null);
  const [searchStr, setSearchStr] = useState('');
  const [searchOption, setSearchOption] = useState('shows');

  const handleInputChange = eve => {
    setSearchStr(eve.target.value);
  };

  const onRadioChange = e => {
    setSearchOption(e.target.value);
  };
  const handleOnSearch = async eve => {
    eve.preventDefault();
    try {
      setApiDataError(null);
      let result;
      if (searchOption === 'shows') {
        result = await SearchForShows(searchStr);
      } else {
        result = await SearchForPeople(searchStr);
      }
      setApiData(result);
    } catch (error) {
      setApiDataError(error);
    }
  };

  const renderApiData = () => {
    if (apiDataError) {
      // console.log(apiDataError);
      return <div>Error Ocuured : {apiDataError.message}</div>;
    }

    if (apiData && Array.isArray(apiData)) {
      return apiData.map(item => (
        <div key={item.show ? item.show.id : item.person.id}>
          {item.show ? item.show.name : item.person.name}
        </div>
      ));
    }
    /* 
    if (apiData && Array.isArray(apiData)) {
      return apiData[0].show ? (apiData.map(item => (
        <div key={item.show.id}> {item.show.name} </div>
      ))) : (apiData.map((item)=>(
        <div key={item.person.id}>{item.person.name}</div>
      )));
    } */

    return null;
  };

  return (
    <div>
      <form onSubmit={handleOnSearch}>
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
      <div>{renderApiData()}</div>
    </div>
  );
};

export default Home;

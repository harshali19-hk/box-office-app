import { useState } from 'react';
import { SearchForShows, SearchForPeople } from '../API/TvmazeApi';
import SearchForm from '../components/SearchForm';

const Home = () => {
  const [apiData, setApiData] = useState([]);
  const [apiDataError, setApiDataError] = useState(null);
 

  
  const handleOnSearch = async ({q,searchOption}) => {
    
    try {
      setApiDataError(null);
      let result;
      if (searchOption === 'shows') {
        result = await SearchForShows(q);
      } else {
        result = await SearchForPeople(q);
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
      <SearchForm onSearch={handleOnSearch} />
      <div>{renderApiData()}</div>
    </div>
  );
};

export default Home;

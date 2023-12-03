const BASE_URL = 'https://api.tvmaze.com';

const APIget = async queryString => {
  const response = await fetch(`${BASE_URL}${queryString}`);
  const body = await response.json();
  return body;
};

export const SearchForShows = query => APIget(`/search/shows?q=${query}`);

export const SearchForPeople = query => APIget(`/search/people?q=${query}`);

export const GetShowId = (showId) => APIget(`/shows/${showId}?embed[]=seasons&embed[]=cast`);

export const GetShowsByIds = async showsIds =>{
  // console.log(showsIds)
  const promises = showsIds.map(showId => APIget(`/shows/${showId}`))
  return Promise.all(promises)
  
}
import { useParams,Link } from 'react-router-dom';
import { GetShowId } from '../API/TvmazeApi';
import { useQuery } from 'react-query';
import ShowMainData from '../components/shows/showMainData';
import Details from '../components/shows/details';
import Cast from '../components/shows/Cast';
import Seasons from '../components/shows/Seasons';
import styled from 'styled-components';
import { TextCenter } from '../components/Commom/TextCenter';

const Show = () => {
  const params = useParams();
  const { showId } = params;

  const { data: showData, error: showError } = useQuery({
    querykey : ['show', showId], queryFn: () => GetShowId(showId),
    refetchOnWindowFocus:false
  });
  // const { data: showData, error: showError } = result;

  if (showError) {
    return <TextCenter>we have an error : {showError.message}</TextCenter>;
  }

  if (showData) {
    return (
      <ShowPageWrapper>
        <BackHomeWrapper >
        <Link to='/'>Go back to Home</Link>
        </BackHomeWrapper>

        
        <ShowMainData
          image={showData.image}
          name={showData.name}
          rating={showData.rating}
          summary={showData.summary}
          genres={showData.genres}

        />
        <InfoBlock>
          <h2>Details</h2>
          <div>
            <Details status={showData.status} premiered={showData.premiered} network={showData.network} />
          </div>
        </InfoBlock>
        <InfoBlock>
          <h2>Seasons</h2>
          <Seasons seasons={showData._embedded.seasons} />
        </InfoBlock>
        <InfoBlock>
          <h2>Cast</h2>
          <Cast cast={showData._embedded.cast} />
        </InfoBlock>
        
      </ShowPageWrapper>
    );
  }

  return (
    <>
      <TextCenter>data is loading....</TextCenter>
    </>
  );
};

export default Show;


const BackHomeWrapper = styled.div`
  margin-bottom: 30px;
  text-align: left;
  a {
    padding: 10px;
    color: ${({ theme }) => theme.mainColors.dark};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ShowPageWrapper = styled.div`
  margin: auto;
  @media only screen and (min-width: 768px) {
    max-width: 700px;
  }
  @media only screen and (min-width: 992px) {
    max-width: 900px;
  }
`;

const InfoBlock = styled.div`
  margin-bottom: 40px;
  h2 {
    margin: 0;
    margin-bottom: 30px;
    font-size: 22px;
  }
`;
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import ImageList from '@mui/material/ImageList';
import Typography from '@mui/material/Typography';
import ResultsItem from './ResultsItem';

const NoResultsPane = ({ isLoading }) =>
  !isLoading && <Typography>No results found 😿</Typography>;

const ResultsPane = ({ isLoading, searchResults }) => {
  const isSmallScreen = useMediaQuery(useTheme().breakpoints.down('sm'));

  if (searchResults?.data) {
    const results = Object.values(searchResults.data)
      .flat()
      .filter((data) => data.type !== 'location');
    const numResults = results.length;
    if (!numResults) {
      return <NoResultsPane isLoading={isLoading} />;
    }
    return (
      <>
        <Typography>{`${numResults} results found`}</Typography>
        <ImageList cols={isSmallScreen ? 1 : 2} gap={10}>
          {results.map((result) => (
            <ResultsItem item={result} key={result.id} />
          ))}
        </ImageList>
      </>
    );
  }
};

export default ResultsPane;

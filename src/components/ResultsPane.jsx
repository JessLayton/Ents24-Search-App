import ImageList from '@mui/material/ImageList';
import Typography from '@mui/material/Typography';
import ResultsItem from './ResultsItem';

const NoResultsPane = ({ isLoading }) =>
  !isLoading && <Typography>No results found 😿</Typography>;

const ResultsPane = ({ isLoading, searchResults }) => {
  if (searchResults?.data) {
    const results = Object.values(searchResults.data)
      .flat()
      .filter((data) => data.type !== 'location');
    if (!results.length) {
      return (
        <NoResultsPane isLoading={isLoading} data-testid='no-results-pane' />
      );
    }
    return (
      <>
        <ImageList data-testid='results-pane'>
          {results.map((result) => (
            <ResultsItem item={result} key={result.id} />
          ))}
        </ImageList>
      </>
    );
  }
};

export default ResultsPane;

import React from 'react';

import ResultsPane from './ResultsPane';
import searchResults from '../../exampleData/searchResults.json';
import emptyResults from '../../exampleData/emptyResults.json';

export default {
  title: 'Results Pane',
  component: ResultsPane,
  parameters: {
    layout: 'padded',
  },
};

export const DefaultResultsPane = () => (
  <ResultsPane isLoading={false} searchResults={searchResults} />
);
export const NoResultsPane = () => (
  <ResultsPane isLoading={false} searchResults={emptyResults} />
);

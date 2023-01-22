import React from 'react';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

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

DefaultResultsPane.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const numResults = searchResults.data.length;
  const results = canvas.getAllByRole('img');

  expect(canvas.getByText(`${numResults} results found`)).toBeInTheDocument();

  expect(results.length).toEqual(numResults);
};

export const NoResultsPane = () => (
  <ResultsPane isLoading={false} searchResults={emptyResults} />
);

NoResultsPane.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const results = canvas.queryAllByRole('img');

  expect(canvas.getByText('No results found 😿')).toBeInTheDocument();

  expect(results.length).toEqual(0);
};

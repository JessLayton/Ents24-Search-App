import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { within, userEvent, waitFor } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import SearchPage from './SearchPage';

const queryClient = new QueryClient();

export default {
  title: 'Search Page',
  component: SearchPage,
  parameters: {
    layout: 'padded',
  },
};

const Template = (args) => {
  return (
    <QueryClientProvider client={queryClient}>
      <SearchPage {...args} />
    </QueryClientProvider>
  );
};

export const DefaultSearchPage = Template.bind({});

DefaultSearchPage.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const textInput = canvas.getByLabelText('Search', {
    selector: 'input',
  });

  await userEvent.type(textInput, 'Bristol', {
    delay: 100,
  });

  await waitFor(() => {
    const results = canvas.getAllByRole('img');
    const firstResult = results[0];

    expect(results.length).toEqual(7);
    expect(firstResult).toBeInTheDocument();
  });
};

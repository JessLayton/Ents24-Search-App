import React from 'react';

import ResultsItem from './ResultsItem';
import resultsItem from '../../exampleData/resultsItem.json';

export default {
  title: 'Results Item',
  component: ResultsItem,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    item: {
      control: 'object',
    },
  },
};

const Template = (args) => {
  return <ResultsItem {...args} />;
};

export const DefaultResultsItem = Template.bind({});
DefaultResultsItem.args = {
  item: resultsItem,
};

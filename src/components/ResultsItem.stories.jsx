import React from 'react';

import ResultsItem from './ResultsItem';
import resultsItem from '../../exampleData/resultsItem.json';
import boldResultsItem from '../../exampleData/boldResultsItem.json';

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
  return <div style={{padding: '20px 350px'}}><ResultsItem {...args} /></div>;
};

export const DefaultResultsItem = Template.bind({});
DefaultResultsItem.args = {
  item: resultsItem,
};

export const BoldResultsItem = Template.bind({});
BoldResultsItem.args = {
  item: boldResultsItem,
};

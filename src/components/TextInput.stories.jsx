import React, { useState } from 'react';

import TextInput from './TextInput';

export default {
  title: 'Text Input',
  component: TextInput,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <TextInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} {...args} />
  )
}

export const DefaultTextInput = Template.bind({});
DefaultTextInput.args = {
  isLoading: false
};

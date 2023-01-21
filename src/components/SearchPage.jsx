import { useState } from 'react';
import { useQuery } from 'react-query';

import ResultsPane from './ResultsPane';
import TextInput from './TextInput';

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const { data, isLoading } = useQuery({
    queryKey: ['search', searchTerm],
    queryFn: () => {
      if (searchTerm) {
        return fetch(`${process.env.REACT_APP_API_URL}?q=${searchTerm}`).then(
          (res) => res.json()
        );
      }
    },
  });

  return (
    <>
      <TextInput
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        isLoading={isLoading}
      />
      <ResultsPane isLoading={isLoading} searchResults={data} />
    </>
  );
};

export default SearchPage;

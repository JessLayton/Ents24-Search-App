import { Stack } from '@mui/material';
import { QueryClient, QueryClientProvider } from 'react-query';

import Container from '@mui/material/Container';

import SearchPage from './SearchPage';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Container maxWidth='xl'>
        <Stack spacing={2}>
          <SearchPage />
        </Stack>
      </Container>
    </QueryClientProvider>
  );
};

export default App;

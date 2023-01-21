import { Stack } from '@mui/material';
import { QueryClient, QueryClientProvider } from 'react-query';
import SearchPage from './components/SearchPage';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Stack
        spacing={2}
        width='80%'
        display='flex'
        justifyContent='center'
        alignItems='center'
      >
        <SearchPage />
      </Stack>
    </QueryClientProvider>
  );
};

export default App;

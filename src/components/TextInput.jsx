import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import CircularProgress from '@mui/material/CircularProgress';
import SearchIcon from '@mui/icons-material/Search';

const TextInput = ({ searchTerm, setSearchTerm, isLoading }) => {
  return (
    <FormControl fullWidth>
      <InputLabel htmlFor='ent-search-field'>Search</InputLabel>
      <OutlinedInput
        id='ent-search-field'
        fullWidth
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        endAdornment={
          isLoading ? (
            <CircularProgress />
          ) : (
            <InputAdornment position='end'>
              <SearchIcon />
            </InputAdornment>
          )
        }
        label='Search'
      />
    </FormControl>
  );
};

export default TextInput;

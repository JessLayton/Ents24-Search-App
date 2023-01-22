import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

const getVenue = (venueName, town) => {
  if (venueName.includes(town)) {
    return venueName;
  } else {
    return `${venueName}, ${town}`;
  }
};

const ResultsItem = ({ item }) => {
  const { type, name, town, image, numEvents } = item;
  return (
    <ImageListItem
      sx={{
        backgroundColor: numEvents >= 20 ? '#ffcf33' : '#33bccd',
        borderRadius: '25px',
      }}
    >
      <img
        src={image ? image.split('?')[0] : null}
        alt={name}
        loading='lazy'
        style={{ borderRadius: '25px 25px 0px 0px' }}
      />
      <ImageListItemBar
        sx={{ padding: 1 }}
        title={type === 'venue' ? getVenue(name, town) : name}
        subtitle={`${numEvents} events`}
        position='below'
      />
    </ImageListItem>
  );
};

export default ResultsItem;

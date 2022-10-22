import {
  List, ListItemText, ListItemButton, Box, Divider, Typography, Button, CircularProgress,
} from '@mui/material';
import { useState } from 'react';
import objectsService from '../../services/objectsService';
import { ButtonWithLoader } from '../ButtonWithLoader';

function Object({ object, getObjects }) {
  const [isLoading, setIsLoading] = useState(false);
  const formatBytes = (a) => {
    const signsAfterDot = 2;
    if (!+a) return '0 Bytes';

    const d = Math.floor(Math.log(a) / Math.log(1024));
    return `${parseFloat((a / 1024 ** d).toFixed(signsAfterDot))} ${['Bytes', 'KB', 'MB'][d]}`;
  };

  const sortObject = async (obj) => {
    setIsLoading(true);
    try {
      await objectsService.sortObjects([obj]);
    } catch (error) {
      console.error({ error });
    } finally {
      setIsLoading(false);
      await getObjects();
    }
  };
  const getSortStatString = (sortStatArray) => {
    if (!sortStatArray.length) return 'no sortings were done';

    return sortStatArray
      .map((sortStat) => (`${parseFloat(sortStat.sortDuration.toFixed(4))}s`))
      .join(', ');
  };
  return (

    <Box sx={{ width: '100%', maxWidth: 550 }}>
      <Typography>
        Object
        {' '}
        {object._id}
      </Typography>
      <List dense>
        <ListItemButton>
          <ListItemText
            primary={`Keys: ${object.keyCount}`}
          />
        </ListItemButton>
        <ListItemButton>
          <ListItemText
            primary={`Depth: ${object.depth}`}
          />
        </ListItemButton>
        <ListItemButton>
          <ListItemText
            primary={`Size: ${formatBytes(object.size)}`}
          />
        </ListItemButton>
        <ListItemButton>
          <ListItemText
            primary={`Sorting stat: ${(getSortStatString(object.sortStats))}`}
          />
        </ListItemButton>
      </List>

      <ButtonWithLoader isLoading={isLoading} onClickAction={() => sortObject(object)} text="Sort" />
      <Divider />
    </Box>

  );
}
export default Object;

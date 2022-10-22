import {
  Button, CircularProgress,
} from '@mui/material';

function ButtonWithLoader({ onClickAction, isLoading, text }) {
  return (
    <Button
      onClick={onClickAction}
      disabled={isLoading}
    >
      {text}
      {' '}
      {isLoading && <CircularProgress />}
    </Button>

  );
}
export default ButtonWithLoader;

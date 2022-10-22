import { TextField, Button } from '@mui/material';
import { useState } from 'react';
import objectsService from '../../services/objectsService';
import { ButtonWithLoader } from '../ButtonWithLoader';
import './ObjectsControlPanel.css';

function ObjectsControlPanel({ objectsRef }) {
  const [depth, setDepth] = useState(1);
  const [numOfKeys, setNumOfKeys] = useState(1);
  const [isLoadingAll, setIsLoadingAll] = useState(false);
  const [isLoadingUnsorted, setIsLoadingUnsorted] = useState(false);

  const sortAll = async () => {
    setIsLoadingAll(true);
    await objectsRef.current.sortAll(setIsLoadingAll);
    setIsLoadingAll(false);
  };

  const sortUnsorted = async () => {
    setIsLoadingUnsorted(true);
    await objectsRef.current.sortUnsorted(setIsLoadingUnsorted);
    setIsLoadingUnsorted(false);
  };

  const createObject = async () => {
    try {
      await objectsService.generateObjects(depth, numOfKeys);
      await objectsRef.current.getObjects();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <div className="container">
        <TextField
          className="input"
          label="Depth"
          type="number"
          value={depth}
          error={depth < 1}
          onChange={(e) => setDepth(e.target.value)}
        />

        <TextField
          className="input"
          label="Number of keys"
          type="number"
          value={numOfKeys}
          onChange={(e) => setNumOfKeys(e.target.value)}
          error={numOfKeys < 1}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Button
          disabled={depth < 1 || numOfKeys < 1 || !depth || !numOfKeys}
          onClick={createObject}
        >
          Create object

        </Button>

      </div>

      <div className="container">
        <ButtonWithLoader isLoading={isLoadingUnsorted} onClickAction={sortUnsorted} text="Sort unsorted" />
        <ButtonWithLoader isLoading={isLoadingAll} onClickAction={sortAll} text="Sort all" />
      </div>

    </div>
  );
}

export default ObjectsControlPanel;

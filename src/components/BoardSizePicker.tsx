import React from 'react';
import { useDispatch } from 'react-redux';
import { resetAction } from '../actions';

import { supportedBoardSizes } from '../config';

const BoardSizePicker: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <div className="size-picker">
        {supportedBoardSizes.map(size => (
          <button key={size} onClick={() => dispatch(resetAction(size))}>
            {size}x{size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BoardSizePicker;

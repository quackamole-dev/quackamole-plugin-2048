import React from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import { Tooltip } from 'react-tooltip';


const Info: React.FC = () => {

  const infoJSX = (
    <div className="info">
      <h2>About</h2>
      <p>
        What you see here is a fork of a reimplementation of Gabriele Cirulli's original <a href="https://play2048.co/">2048</a> game.
      </p>
      <p>
        This fork was created with the intent of being used as a 'quackamole' plugin.
      </p>
      <p>
        <a href="https://github.com/mat-sz/2048">Source code of reimplementation</a>.
      </p>
      <p>
        <a href="https://github.com/quackamole-dev/quackamole-plugin-2048">Source code of this fork</a>.
      </p>
    </div>
  );
  
  return (
    <div className="info-icon">
      <FaInfoCircle className='tt-anchor' />
      <Tooltip anchorSelect=".tt-anchor" place="bottom" clickable>
        {infoJSX}
      </Tooltip>
    </div>
  );
};

export default Info;

import React from 'react';
import { PIECE_HEIGHT, PIECE_WIDTH } from '../../constants';

const King = ({primaryColor, secondaryColor}) => {
  
  const kingStyle = {
    fill: 'none',
    fillOpacity: 1,
    fillRule: 'evenodd',
    stroke: secondaryColor,
    strokeWidth: 1.5,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeMiterlimit: 4,
    strokeDasharray: 'none',
    strokeOpacity: 1,
  };

  const kingFillColor = primaryColor;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={`${PIECE_WIDTH}`} height={`${PIECE_HEIGHT}`} viewBox={`0 0 ${PIECE_WIDTH} ${PIECE_HEIGHT}`}>
      <g style={kingStyle}>
        <path
          d="M 22.5,25 C 22.5,25 27,17.5 25.5,14.5 C 25.5,14.5 24.5,12 22.5,12 C 20.5,12 19.5,14.5 19.5,14.5 C 18,17.5 22.5,25 22.5,25"
          style={{ fill: kingFillColor, stroke: secondaryColor, strokeLinecap: 'butt', strokeLinejoin: 'miter' }}
        />
        <path
          d="M 11.5,37 C 17,40.5 27,40.5 32.5,37 L 32.5,30 C 32.5,30 41.5,25.5 38.5,19.5 C 34.5,13 25,16 22.5,23.5 L 22.5,27 L 22.5,23.5 C 19,16 9.5,13 6.5,19.5 C 3.5,25.5 11.5,29.5 11.5,29.5 L 11.5,37 z "
          style={{ fill: kingFillColor, stroke: secondaryColor }}
        />
        <path
          d="M 11.5,30 C 17,27 27,27 32.5,30"
          style={{ fill: 'none', stroke: secondaryColor }}
        />
        <path
          d="M 11.5,33.5 C 17,30.5 27,30.5 32.5,33.5"
          style={{ fill: 'none', stroke: secondaryColor }}
        />
        <path
          d="M 11.5,37 C 17,34 27,34 32.5,37"
          style={{ fill: 'none', stroke: secondaryColor }}
        />
        <path
          d="M 25 8 A 2.5 2.5 0 1 1  20,8 A 2.5 2.5 0 1 1  25 8 z"
          style={{ fill: primaryColor, stroke: secondaryColor }}
        />
      </g>
    </svg>
  );
}

export default King;

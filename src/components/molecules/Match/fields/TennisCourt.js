import React from 'react';
import { Svg } from 'expo';

const { G, Circle, Path, Line, Rect } = Svg;

const TennisCourt = () => {
  return (
    <Svg viewBox="0 0 400 180" height="180" width="350">
      <G fill="none">
        <Path d="M0 0v180h400v-180h-400z" fill="#A24428" />
        <Path
          d="M98 17h2v146h-2v-146zm202 0h2v146h-2v-146zm-298-2h396v2h-396v-2zm0 148h396v2h-396v-2zm98-74h200v2h-200v-2z"
          fill="#B46953"
        />
        <Path d="M199 9h3v162h-3v-162z" fill="#DDBBB1" />
        <Path d="M199 171v3h3v-3h-3z" fill="#684100" />
        <Path d="M199 6v3h3v-3h-3z" fill="#684100" />
        <Path stroke="#B46953" stroke-width="2" d="M1 1h398v178h-398z" />
      </G>
    </Svg>
  );
};

export default TennisCourt;

// <defs>
//   <filter
//     x="-50%"
//     y="-50%"
//     width="200%"
//     height="200%"
//     filterUnits="objectBoundingBox"
//     id="a"
//   >
//     <feOffset dx="2" in="SourceAlpha" result="shadowOffsetOuter1" />
//     <feGaussianBlur
//       stdDeviation="1"
//       in="shadowOffsetOuter1"
//       result="shadowBlurOuter1"
//     />
//     <feColorMatrix
//       values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.14 0"
//       in="shadowBlurOuter1"
//       result="shadowMatrixOuter1"
//     />
//     <feMerge>
//       <feMergeNode in="shadowMatrixOuter1" />
//       <feMergeNode in="SourceGraphic" />
//     </feMerge>
//   </filter>
// </defs>

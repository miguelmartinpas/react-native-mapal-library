import React from 'react';
import { Svg } from 'expo';

const { G, Circle, Path, Line, Rect } = Svg;

const FootballField = () => {
  return (
    <Svg width="350" height="180" viewBox="0 0 400 180">
      <G
        id="pitch"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <Path fill="#222" d="M0 0h400v180h-400z" />
        <Rect
          id="pitch-BG"
          fill="#2C7836"
          x="0"
          y="0"
          width="400"
          height="180"
        />
        <Rect
          id="18-yard-away"
          stroke="#3A8943"
          stroke-width="2"
          x="348"
          y="44"
          width="51"
          height="93"
        />
        <Rect
          id="18-yard-home"
          stroke="#3A8943"
          stroke-width="2"
          x="1"
          y="44"
          width="51"
          height="93"
        />
        <Path
          d="M199,3 L199,178 L199,179 L201,179 L201,178 L201,3 L201,2 L199,2 L199,3 L199,3 Z"
          id="Shape"
          fill="#3A8943"
        />
        <Path
          d="M200,118 L200,118 C215.463973,118 228,105.463973 228,90 C228,74.536027 215.463973,62 200,62 C184.536027,62 172,74.536027 172,90 C172,105.463973 184.536027,118 200,118 L200,118 Z M200,120 L200,120 C183.431458,120 170,106.568542 170,90 C170,73.4314575 183.431458,60 200,60 C216.568542,60 230,73.4314575 230,90 C230,106.568542 216.568542,120 200,120 L200,120 Z"
          id="Shape-Copy"
          fill="#3A8943"
        />
        <Circle id="Oval-344" fill="#3A8943" cx="200" cy="90" r="6" />
        <Path
          d="M74,63 C65.5522257,68.9666814 60,79.0570309 60,90.5 C60,101.942969 65.5522257,112.033319 74,118"
          id="d-left"
          stroke="#3A8943"
          stroke-width="2"
          transform="translate(67.000000, 90.500000) scale(-1, 1) translate(-59.000000, -90.500000) "
        />
        <Circle id="Oval-70" fill="#3A8943" cx="34" cy="90" r="3" />
        <Path
          d="M1,11 C6.5228475,11 11,6.5228475 11,1 L9.046875,1 C9.046875,5.44416635 5.44416635,9.046875 1,9.046875 L1,11 L1,11 Z"
          id="Shape"
          fill="#3A8943"
        />
        <Path
          d="M1,171 C5.418278,171 9,174.581722 9,179 L11,179 C11,173.477153 6.5228475,169 1,169 L1,171 L1,171 Z"
          id="Shape"
          fill="#3A8943"
        />
        <Path
          d="M337.884236,62 C328.64831,68.2472191 323,78.6467666 323,90 C323,101.353233 328.64831,111.752781 337.884236,118 L339,116.354082 C330.305144,110.472845 324.989964,100.686649 324.989964,90 C324.989964,79.3133507 330.305144,69.5271551 339,63.645918 L337.884236,62 L337.884236,62 Z"
          transform="translate(9,0)"
          id="Shape-Copy-2"
          fill="#3A8943"
        />
        <Rect
          id="6-yard-home"
          stroke="#3A8943"
          stroke-width="2"
          x="1"
          y="69"
          width="16"
          height="41"
        />
        <Path
          d="M399,69 L383,69 L383,110 L399,110 L399,69 L399,69 Z"
          id="6-yard-away"
          stroke="#3A8943"
          stroke-width="2"
        />
        <Circle id="Oval-70" fill="#3A8943" cx="365" cy="90" r="3" />
        <Path
          d="M399,9.046875 C394.555834,9.046875 390.953125,5.44416635 390.953125,1 L389,1 C389,6.5228475 393.477153,11 399,11 L399,9.046875 L399,9.046875 Z"
          id="Shape"
          fill="#3A8943"
        />
        <Path
          d="M399,169 C393.477153,169 389,173.477153 389,179 L391,179 C391,174.581722 394.581722,171 399,171 L399,169 L399,169 Z"
          id="Shape"
          fill="#3A8943"
        />
        <Rect
          stroke="#3A8943"
          stroke-width="2"
          x="1"
          y="1"
          width="398"
          height="178"
        />
      </G>
    </Svg>
  );
};

export default FootballField;

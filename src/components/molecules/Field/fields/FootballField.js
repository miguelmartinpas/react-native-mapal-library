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
      <Path
        class="ml1-SoccerPitch_AnimationElement"
        id="ml1-Possession1"
        opacity="0"
        d="M2,2 266.799173553719,2 267.39421487603306,2 C267.39421487603306,1.4 278.7,28 278.7,28 C279.29504132231403,29 279.29504132231403,30 278.7,31 L267.39421487603306,61 L278.7,88 C279.29504132231403,89 279.29504132231403,90 278.7,91 L267.39421487603306,121 L278.7,146 C279.29504132231403,147 279.29504132231403,150 278.7,151 L267.39421487603306,178 C267.39421487603306,178 2.0,178 2.0,178 L2,2 Z"
        fill="black"
        style="opacity: 0;"
      />
      <Path
        class="ml1-SoccerPitch_AnimationElement"
        id="ml1-Possession2"
        opacity="0"
        d="M398,2 200.89000000000001,2 200.89000000000001,2 C200.89000000000001,1 200.89000000000001,28 200.89000000000001,28 C200.89000000000001,29 200.89000000000001,30 200.89000000000001,31 L200.89000000000001,61 L200.89000000000001,88 C200.89000000000001,89 200.89000000000001,90 200.89000000000001,91 L200.89000000000001,121 L200.89000000000001,146 C200.89000000000001,147 200.89000000000001,150 200.89000000000001,151 L200.89000000000001,178 C200.89000000000001,178 398.0,178 398.0,178 L398,2 Z"
        fill="black"
        style="opacity: 0;"
      />
      <G
        class="ml1-SoccerPitch_AnimationElement"
        id="ml1-WideKickRadial"
        opacity="0"
      >
        <Path
          id="ml1-WideKickRadialOuter"
          fill="#165031"
          d="M94.703,73.698C110.554,53.359,120,27.784,120,0c0-27.764-9.433-53.321-25.262-73.653L0,0.036L94.703,73.698z"
        />
        <Path
          id="ml1-WideKickRadialCentre"
          fill="#165031"
          d="M62.325,48.514C72.765,35.123,79,18.294,79,0c0-18.274-6.222-35.085-16.639-48.469L0,0.036L62.325,48.514z"
        />
        <Path
          id="ml1-WideKickRadialInner"
          fill="#165031"
          d="M30.759,23.961C35.918,17.349,39,9.037,39,0c0-9.017-3.068-17.311-8.205-23.917L0,0.036L30.759,23.961z"
        />
      </G>
      <G
        class="ml1-SoccerPitch_AnimationElement"
        id="ml1-NarrowKickRadial"
        opacity="0"
        transform="translate(220.00000000000003, 99.00000000000001) rotate(-177.65738799350174)"
      >
        <Path
          id="ml1-NarrowKickRadialOuter"
          fill="#165031"
          d="M0.031,0.013l117.647,45.045C123.041,31.064,126,15.881,126,0s-2.959-31.065-8.322-45.059L0.093-0.036L0.031,0.013z"
          style="opacity: 0; transform: scaleX(1) scaleY(1);"
          class=""
        />
        <Path
          id="ml1-NarrowKickRadialCentre"
          fill="#165031"
          d="M0.031,0.013l77.43,29.647c3.536-9.21,5.488-19.204,5.488-29.66s-1.952-20.45-5.487-29.66L0.093-0.036L0.031,0.013z"
          style="opacity: 0; transform: scaleX(0.0423794) scaleY(0.0423794);"
          class="velocity-animating"
        />
        <Path
          id="ml1-NarrowKickRadialInner"
          fill="#165031"
          d="M0.031,0.013l38.208,14.629c1.746-4.546,2.71-9.48,2.71-14.642s-0.964-10.096-2.709-14.642L0.093-0.036L0.031,0.013z"
          style="opacity: 0; transform: scaleX(0.248188) scaleY(0.248188);"
          class="velocity-animating"
        />
      </G>
      <G
        class="ml1-SoccerPitch_AnimationElement"
        id="ml1-ThrowRadial"
        opacity="0"
      >
        <Path
          id="ml1-ThrowRadialOuter"
          fill="#165031"
          d="M53.033,53.068c29.289-29.289,29.289-76.777,0-106.066L0,0.035L53.033,53.068z"
        />
        <Path
          id="ml1-ThrowRadialInner"
          fill="#165031"
          d="M26.517,26.552c14.646-14.645,14.644-38.39,0-53.033L0,0.035L26.517,26.552z"
        />
      </G>
    </Svg>
  );
};

export default FootballField;

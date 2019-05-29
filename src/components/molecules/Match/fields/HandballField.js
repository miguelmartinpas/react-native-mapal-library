import React from 'react';
import { Svg } from 'expo';

const { G, Circle, Path, Line, Rect } = Svg;

const HandballField = () => {
  return (
    <Svg width="350" height="180" viewBox="0 0 400 180">
      <G
        id="Assets_Colours"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <G id="ML-pitches">
          <G id="handball_pitch_400px">
            <Rect
              id="Rectangle-246"
              fill="#0E608A"
              x="0"
              y="0"
              width="400"
              height="180"
            />
            <Path
              d="M42,177 C54.8433803,174.107438 62.2132394,172.762397 76,161 C83.6619718,155.219008 93,137.950413 93,125 L93,54 C93,38.0702479 83.3028169,26.9483471 76,21 C66.0633803,12.1239669 57.9752113,6.25206612 42,2"
              id="Stroke-7"
              stroke="#2E7599"
              stroke-width="2"
              stroke-linecap="round"
              stroke-dasharray="6"
            />
            <Path
              d="M2,157.5 C25.0617318,157.5 43.4967037,150.244043 54,140.5 C58.2129713,136.288085 63.9784042,128.989362 64,115.5 C64.0072314,114.776809 63.9928178,66.2659574 64,65.5 C63.9784042,53.4361702 58.2994528,44.7974468 54,40.5 C43.5975988,30.8414894 25.0617318,23.5 2,23.5"
              id="Fill-11"
              fill="#2E7599"
            />
            <Rect
              id="Rectangle-111"
              fill="#5790AD"
              x="50"
              y="84"
              width="2"
              height="12"
              rx="2"
            />
            <Rect
              id="Rectangle-111-Copy"
              fill="#3281A8"
              x="75"
              y="84"
              width="2"
              height="12"
              rx="2"
            />
            <Path
              d="M305,176.5 C317.84338,173.607438 325.213239,172.262397 339,160.5 C346.661972,154.719008 356,137.450413 356,124.5 L356,53.5 C356,37.5702479 346.302817,26.4483471 339,20.5 C329.06338,11.6239669 320.975211,5.75206612 305,1.5"
              id="Stroke-7"
              stroke="#2E7599"
              stroke-width="2"
              stroke-linecap="round"
              stroke-dasharray="6"
              transform="translate(330.500000, 89.000000) scale(-1, 1) translate(-330.500000, -89.000000) "
            />
            <Path
              d="M336.004185,157 C359.065139,157 377.499489,149.744043 388.00243,139.87218 C392.215259,135.788085 397.980498,128.489362 398.002093,114.684211 C398.009324,114.276809 397.994911,65.7659574 398.002093,65.3157895 C397.980498,52.9361702 392.301738,44.2974468 388.00243,40.1278195 C377.60038,30.3414894 359.065139,23 336.004185,23"
              id="Fill-11"
              fill="#2E7599"
              transform="translate(367.002093, 90.000000) scale(-1, 1) translate(-367.002093, -90.000000) "
            />
            <Rect
              id="Rectangle-111"
              fill="#5790AD"
              transform="translate(347.011429, 90.000000) scale(-1, 1) translate(-347.011429, -90.000000) "
              x="346.022857"
              y="84"
              width="2"
              height="12"
              rx="2"
            />
            <Rect
              id="Rectangle-111-Copy"
              fill="#3281A8"
              transform="translate(322.011429, 90.000000) scale(-1, 1) translate(-322.011429, -90.000000) "
              x="321.022857"
              y="84"
              width="2"
              height="12"
              rx="2"
            />
            <Path
              d="M198,177 L198,178 L200,178 L200,177 L200,3 L200,2 L198,2 L198,3 L198,177 Z"
              id="centre-line"
              fill="#2E7599"
            />
            <Rect
              id="Rectangle-247"
              stroke="#2E7599"
              stroke-width="2"
              x="1"
              y="1"
              width="398"
              height="178"
            />
          </G>
          <Path
            id="ml78-Possession1"
            fill="red"
            opacity="0"
            d="M1.7,2.0 L188.7,2.0 L198.7,2.0 L201.7,7.0 C201.7,7.0 245.0,83.0 244.7,89.0 C244.4,95.0 203.0,173.0 201.7,175.0 L199.7,178.0 L188.7,178.0 L1.7,178.0 1.7,2.0 Z"
            class=""
            style="opacity: 0;"
          />
          <Path
            id="ml78-Possession2"
            fill="yellow"
            opacity="0"
            d="M398.3,2 L211.3,2 L201.3,2 L198.3,7 C198.3,7 155,83 155.3,89 C155.6,95 197,173 198.3,175 L200.3,178 L211.3,178 L398.3,178 398.3,2 Z"
            class=""
            style="opacity: 0;"
          />
        </G>
      </G>
    </Svg>
  );
};

export default HandballField;

// <defs>
// <!-- This is where the colours get pumped when the possession changes -->
// <linearGradient id="ml78-Gradient1">
// <stop class="gradStart" offset="20%" style="stop-opacity: 0.2; stop-color: rgb(0, 0, 0);">
// </stop>
// <stop class="gradEnd" offset="80%" style="stop-opacity:0.4; stop-color:#000000">
// </stop>
// </linearGradient>
//    <linearGradient id="ml78-Gradient2">
// <stop class="gradStart" offset="20%" style="stop-opacity: 0.4; stop-color: rgb(0, 0, 0);">
// </stop>
// <stop class="gradEnd" offset="80%" style="stop-opacity:0.2; stop-color:#000000">
// </stop>
// </linearGradient>
// </defs>

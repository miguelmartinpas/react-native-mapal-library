import React from 'react';
import { Svg } from 'expo';

const { G, Circle, Path, Line, Rect, Defs } = Svg;

const RugbyField = () => {
  return (
    <Svg width="350" height="180" viewBox="0 0 400 180">
      <Defs />
      <G stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <Rect fill="#5C7F26" x="0" y="0" width="400" height="180" />
        <Path d="M2,2 L42,2 L42,178 L2,178 L2,2 Z" opacity="0.1" fill="#000" />
        <Path
          d="M358,2 L398,2 L398,178 L358,178 L358,2 Z"
          opacity="0.1"
          fill="#000"
        />
        <Rect fill="#738F3C" x="40" y="2" width="2" height="176" />
        <Rect fill="#7A993E" x="115" y="2" width="2" height="176" />
        <Rect fill="#7A993E" x="199" y="2" width="2" height="176" />
        <Rect fill="#7A993E" x="283" y="2" width="2" height="176" />
        <Rect fill="#738F3C" x="358" y="2" width="2" height="176" />
        <G id="4th-Horizontal-Dashed-Line" fill="#7A993E">
          <Path
            id="4th-Horizontal-Line"
            d="M46.5 165h.5v-1h-6v1h5.5zm12 0h.5v-1h-6v1h5.5zm12 0h.5v-1h-6v1h5.5zm12 0h.5v-1h-6v1h5.5zm12 0h.5v-1h-6v1h5.5zm12 0h.5v-1h-6v1h5.5zm12 0h.5v-1h-6v1h5.5zm12 0h.5v-1h-6v1h5.5zm12 0h.5v-1h-6v1h5.5zm12 0h.5v-1h-6v1h5.5zm12 0h.5v-1h-6v1h5.5zm12 0h.5v-1h-6v1h5.5zm12 0h.5v-1h-6v1h5.5zm12 0h.5v-1h-6v1h5.5zm12 0h.5v-1h-6v1h5.5zm12 0h.5v-1h-6v1h5.5zm12 0h.5v-1h-6v1h5.5zm12 0h.5v-1h-6v1h5.5zm12 0h.5v-1h-6v1h5.5zm12 0h.5v-1h-6v1h5.5zm12 0h.5v-1h-6v1h5.5zm12 0h.5v-1h-6v1h5.5zm12 0h.5v-1h-6v1h5.5zm12 0h.5v-1h-6v1h5.5zm12 0h.5v-1h-6v1h5.5zm12 0h.5v-1h-6v1h5.5zm12 0h.5v-1h-6v1h5.5z"
          />
        </G>
        <G id="3rd-Horizontal-Dashed-Line" fill="#7A993E">
          <Path
            id="3rd-Horizontal-Line"
            d="M46.5 145h.5v-1h-6v1h5.5zm12 0h.5v-1h-6v1h5.5zm12 0h.5v-1h-6v1h5.5zm12 0h.5v-1h-6v1h5.5zm12 0h.5v-1h-6v1h5.5zm12 0h.5v-1h-6v1h5.5zm12 0h.5v-1h-6v1h5.5zm12 0h.5v-1h-6v1h5.5zm12 0h.5v-1h-6v1h5.5zm12 0h.5v-1h-6v1h5.5zm12 0h.5v-1h-6v1h5.5zm12 0h.5v-1h-6v1h5.5zm12 0h.5v-1h-6v1h5.5zm12 0h.5v-1h-6v1h5.5zm12 0h.5v-1h-6v1h5.5zm12 0h.5v-1h-6v1h5.5zm12 0h.5v-1h-6v1h5.5zm12 0h.5v-1h-6v1h5.5zm12 0h.5v-1h-6v1h5.5zm12 0h.5v-1h-6v1h5.5zm12 0h.5v-1h-6v1h5.5zm12 0h.5v-1h-6v1h5.5zm12 0h.5v-1h-6v1h5.5zm12 0h.5v-1h-6v1h5.5zm12 0h.5v-1h-6v1h5.5zm12 0h.5v-1h-6v1h5.5zm12 0h.5v-1h-6v1h5.5z"
          />
        </G>
        <G id="2nd-Horizontal-Dashed-Line" fill="#7A993E">
          <Path
            id="2nd-Horizontal-Line"
            d="M46.5 35h.5v-1h-6v1h5.5zm12 0h.5v-1h-6v1h5.5zm12 0h.5v-1h-6v1h5.5zm12 0h.5v-1h-6v1h5.5zm12 0h.5v-1h-6v1h5.5zm12 0h.5v-1h-6v1h5.5zm12 0h.5v-1h-6v1h5.5zm12 0h.5v-1h-6v1h5.5zm12 0h.5v-1h-6v1h5.5zm12 0h.5v-1h-6v1h5.5zm12 0h.5v-1h-6v1h5.5zm12 0h.5v-1h-6v1h5.5zm12 0h.5v-1h-6v1h5.5zm12 0h.5v-1h-6v1h5.5zm12 0h.5v-1h-6v1h5.5zm12 0h.5v-1h-6v1h5.5zm12 0h.5v-1h-6v1h5.5zm12 0h.5v-1h-6v1h5.5zm12 0h.5v-1h-6v1h5.5zm12 0h.5v-1h-6v1h5.5zm12 0h.5v-1h-6v1h5.5zm12 0h.5v-1h-6v1h5.5zm12 0h.5v-1h-6v1h5.5zm12 0h.5v-1h-6v1h5.5zm12 0h.5v-1h-6v1h5.5zm12 0h.5v-1h-6v1h5.5zm12 0h.5v-1h-6v1h5.5z"
          />
        </G>
        <G id="1st-Horizontal-Dashed-Line" fill="#7A993E">
          <Path
            id="1st-Horizontal-Line"
            d="M46.5 15h.5v-1h-6v1h5.5zm12 0h.5v-1h-6v1h5.5zm12 0h.5v-1h-6v1h5.5zm12 0h.5v-1h-6v1h5.5zm12 0h.5v-1h-6v1h5.5zm12 0h.5v-1h-6v1h5.5zm12 0h.5v-1h-6v1h5.5zm12 0h.5v-1h-6v1h5.5zm12 0h.5v-1h-6v1h5.5zm12 0h.5v-1h-6v1h5.5zm12 0h.5v-1h-6v1h5.5zm12 0h.5v-1h-6v1h5.5zm12 0h.5v-1h-6v1h5.5zm12 0h.5v-1h-6v1h5.5zm12 0h.5v-1h-6v1h5.5zm12 0h.5v-1h-6v1h5.5zm12 0h.5v-1h-6v1h5.5zm12 0h.5v-1h-6v1h5.5zm12 0h.5v-1h-6v1h5.5zm12 0h.5v-1h-6v1h5.5zm12 0h.5v-1h-6v1h5.5zm12 0h.5v-1h-6v1h5.5zm12 0h.5v-1h-6v1h5.5zm12 0h.5v-1h-6v1h5.5zm12 0h.5v-1h-6v1h5.5zm12 0h.5v-1h-6v1h5.5zm12 0h.5v-1h-6v1h5.5z"
          />
        </G>
        <G
          id="4th-Vertical-Dashed-Line"
          stroke="#6A902C"
          stroke-linecap="square"
          stroke-dasharray="6 8"
        >
          <Path id="1st-Line-Vertical-B" d="M350.5 144.5v34.01" />
          <Path id="1st-Line-Vertical-A" d="M350.5 2.5v132.01" />
        </G>
        <G
          id="3rd-Vertical-Dashed-Line"
          stroke="#6A902C"
          stroke-linecap="square"
          stroke-dasharray="6 8"
        >
          <Path id="1st-Line-Vertical-B" d="M242.5 144.5v34.01" />
          <Path id="1st-Line-Vertical-A" d="M242.5 2.5v132.01" />
        </G>
        <G
          id="2nd-Vertical-Dashed-Line"
          stroke="#6A902C"
          stroke-linecap="square"
          stroke-dasharray="6 8"
        >
          <Path id="1st-Line-Vertical-B" d="M158.5 144.5v34.01" />
          <Path id="1st-Line-Vertical-A" d="M158.5 2.5v132.01" />
        </G>
        <G
          id="1st-Vertical-Dashed-Line"
          stroke="#6A902C"
          stroke-linecap="square"
          stroke-dasharray="6 8"
        >
          <Path id="1st-Line-Vertical-B" d="M50.5 144.5v34.01" />
          <Path id="1st-Line-Vertical-A" d="M50.5 2.5v132.01" />
        </G>
        <G id="inner-border">
          <Rect fill="#7a993e" x="0.5" y="0.5" width="399" height="1.5" />
          <Rect fill="#7a993e" x="398" y="0.5" width="1.5" height="178" />
          <Rect fill="#7a993e" x="0.5" y="178" width="398" height="1.5" />
          <Rect fill="#7a993e" x="0.5" y="0.5" width="1.5" height="178" />
        </G>
        <G id="dark-border">
          <Rect fill="#333333" x="0" y="0" width="400" height="0.5" />
          <Rect fill="#333333" x="399.5" y="0" width="1" height="180" />
          <Rect fill="#333333" x="0" y="179.5" width="400" height="0.5" />
          <Rect fill="#333333" x="0" y="0" width="0.5" height="180" />
        </G>
        <G
          id="rugby-stand"
          transform="scale(-1, 1) translate(-379.0, 79.0)"
          stroke="#7A993E"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <Path d="M20,4 L1,0" stroke-width="1.6" />
          <Path d="M20,3.77 L15,3" stroke-width="3" />
          <Path d="M2,22 L20,19" stroke-width="1.6" />
          <Path d="M15,19.77 L20,19" stroke-width="3" />
          <Path d="M15,3 L15,19" />
        </G>
        <G
          id="rugby-stand-copy"
          transform="translate(21.0, 79.0)"
          stroke="#7A993E"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <Path d="M20,4 L1,0" id="Stroke-19" stroke-width="1.6" />
          <Path d="M20,3.77 L15,3" id="Stroke-20" stroke-width="3" />
          <Path d="M2,22 L20,19" id="Stroke-21" stroke-width="1.6" />
          <Path d="M15,19.77 L20,19" id="Stroke-22" stroke-width="3" />
          <Path d="M15,3 L15,19" id="Stroke-23" />
        </G>
        <G
          id="ml8-WideKickRadial"
          opacity="0"
          transform="translate(80.11999999999999, 84.60000000000001) rotate(0)"
          class=""
          style="transform: translateX(80.12px) translateY(84.6px) rotateZ(-180deg);"
        >
          <Path
            id="ml8-WideKickRadialOuter"
            fill="#254000"
            d="M127.84905,99.5918919 C149.24925,72.1067568 162,37.5459459 162,0 C162,-37.5189189 149.2641,-72.0554054 127.8963,-99.5310811 L0,0.0486486486 L127.84905,99.5918919 L127.84905,99.5918919 Z"
            opacity="0"
            class=""
            style="opacity: 0; transform: scaleX(0) scaleY(0);"
          />
          <Path
            id="ml8-WideKickRadialCentre"
            fill="#254000"
            d="M84.13875,65.5594595 C98.2341,47.4635135 106.65,24.7216216 106.65,1.42108547e-14 C106.65,-24.6945946 98.24895,-47.4121622 84.18735,-65.4986486 L0,0.0486486486 L84.13875,65.5594595 L84.13875,65.5594595 Z"
            opacity="0"
            class=""
            style="opacity: 0; transform: scaleX(0) scaleY(0);"
          />
          <Path
            id="ml8-WideKickRadialInner"
            fill="#254000"
            d="M41.52465,32.3797297 C48.4893,23.4445946 52.65,12.2121622 52.65,7.10542736e-15 C52.65,-12.1851351 48.5082,-23.3932432 41.57325,-32.3202703 L0,0.0486486486 L41.52465,32.3797297 L41.52465,32.3797297 Z"
            opacity="0"
            class=""
            style="opacity: 0; transform: scaleX(0) scaleY(0);"
          />
        </G>
        <G id="ml8-NarrowKickRadial" opacity="0">
          <Path
            id="ml8-NarrowKickRadialOuter"
            fill="#254000"
            d="M0.0401031746,-0.483184783 L152.232944,57.7815435 C159.172087,39.6806087 163,20.0417283 163,-0.5 C163,-21.0417283 159.172087,-40.6819022 152.234238,-58.782837 L0.120309524,-0.546565217 L0.0401031746,-0.483184783 L0.0401031746,-0.483184783 Z"
          />
          <Path
            id="ml8-NarrowKickRadialCentre"
            fill="#254000"
            d="M0.0401031746,-0.483184783 L100.207484,37.8645652 C104.781833,25.9516304 107.30704,13.0246087 107.30704,-0.5 C107.30704,-14.0246087 104.781833,-26.9516304 100.208778,-38.8645652 L0.120309524,-0.546565217 L0.0401031746,-0.483184783 L0.0401031746,-0.483184783 Z"
          />
          <Path
            id="ml8-NarrowKickRadialInner"
            fill="#254000"
            d="M0.0401031746,-0.483184783 L49.466619,18.4391087 C51.7253333,12.5589565 52.9737063,6.17693478 52.9737063,-0.5 C52.9737063,-7.17693478 51.7253333,-13.5589565 49.4692063,-19.4391087 L0.120309524,-0.546565217 L0.0401031746,-0.483184783 L0.0401031746,-0.483184783 Z"
          />
        </G>
      </G>
    </Svg>
  );
};

export default RugbyField;

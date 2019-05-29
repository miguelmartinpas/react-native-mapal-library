import React from 'react';
import { Svg } from 'expo';

const { G, Circle, Path, Line, Rect } = Svg;

const BasketballCourt = () => {
  return (
    <Svg width="350" height="180" viewBox="0 0 400 180">
      <G
        id="Assets_Colours"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <G id="ML-pitches" transform="translate(-20.000000, -19.000000)">
          <Path
            d="M30.5,116 L30.5,116 C33.5375661,116 36,113.537566 36,110.5 C36,107.462434 33.5375661,105 30.5,105 C27.4624339,105 25,107.462434 25,110.5 C25,113.537566 27.4624339,116 30.5,116 L30.5,116 Z M25,115.599068 C26.369745,117.075822 28.3269458,118 30.5,118 C34.6421356,118 38,114.642136 38,110.5 C38,106.357864 34.6421356,103 30.5,103 C28.3269458,103 26.369745,103.924178 25,105.400932 L25,99 L23,99 L23,122 L25,122 L25,115.599068 Z"
            id="Shape"
            fill="#DDB996"
          />
          <Circle id="Oval-43" fill="#CC7652" cx="30.5" cy="110.5" r="5.5" />
          <G
            id="basketball_court_400px"
            transform="translate(20.000000, 19.000000)"
          >
            <Rect id="BG" fill="#CC9F51" x="0" y="0" width="400" height="180" />
            <Path
              d="M200.510638,113 L200.510638,113 C212.150264,113 222,103.150264 222,91.5106383 C222,78.9970664 212.292525,69 200.510638,69 C187.849736,69 178,78.8497355 178,91.5106383 C178,103.292525 187.997066,113 200.510638,113 L200.510638,113 Z M200.510638,115 L200.510638,115 C186.745166,115 176,104.254834 176,91.5106383 C176,77.745166 186.745166,67 200.510638,67 C213.254834,67 224,77.745166 224,91.5106383 C224,104.254834 213.254834,115 200.510638,115 L200.510638,115 Z"
              id="Shape"
              fill="#D9B470"
            />
            <Circle id="Oval-9-Copy" fill="#D9B470" cx="200" cy="91" r="8" />
            <Rect
              id="Rectangle-22"
              stroke="#D9B470"
              stroke-width="2"
              fill="#CC7651"
              x="1"
              y="57"
              width="78"
              height="70"
            />
            <Path
              d="M1,23 L61,23 C61,23 114,30.8576241 114,92 C114,152.142373 61,160 61,160 L1,160"
              id="Path-32"
              stroke="#D9B470"
              stroke-width="2"
            />
            <Path
              d="M79.5106383,113 L79.5106383,113 C91.1502645,113 101,103.150264 101,91.5106383 C101,78.9970664 91.2925248,69 79.5106383,69 C66.8497355,69 57,78.8497355 57,91.5106383 C57,103.292525 66.9970664,113 79.5106383,113 L79.5106383,113 Z M79.5106383,115 L79.5106383,115 C65.745166,115 55,104.254834 55,91.5106383 C55,77.745166 65.745166,67 79.5106383,67 C92.254834,67 103,77.745166 103,91.5106383 C103,104.254834 92.254834,115 79.5106383,115 L79.5106383,115 Z"
              id="Shape"
              fill="#D9B470"
            />
            <Path
              d="M2,65 C2,64.2209473 2,67 2,67 L78,67 L78,65 L2,65 Z M34.8378378,62 L32.7837838,62 L32.7837838,65 L34.8378378,65 L34.8378378,62 Z M49.2162162,62 L47.1621622,62 L47.1621622,65 L49.2162162,65 L49.2162162,62 Z M63.5945946,62 L61.5405405,62 L61.5405405,65 L63.5945946,65 L63.5945946,62 Z"
              id="Rectangle-21"
              fill="#D09F64"
            />
            <Path
              d="M2,118 L2,120 L78,120 L78,118 L2,118 Z M34,115 L32,115 L32,118 L34,118 L34,115 Z M48,115 L46,115 L46,118 L48,118 L48,115 Z M62,115 L60,115 L60,118 L62,118 L62,115 Z"
              id="Rectangle-21-Copy"
              fill="#D09F64"
              transform="translate(40.000000, 117.500000) scale(1, -1) translate(-40.000000, -117.500000) "
            />
            <Rect
              id="Rectangle-22"
              stroke="#D9B470"
              stroke-width="2"
              fill="#CC7652"
              transform="translate(360.000000, 92.000000) scale(-1, 1) translate(-361.000000, -92.000000) "
              x="322"
              y="57"
              width="78"
              height="70"
            />
            <Path
              d="M286,23 L346,23 C346,23 399,30.8576241 399,92 C399,152.142373 346,160 346,160 L286,160"
              id="Path-32"
              stroke="#D9B470"
              stroke-width="2"
              transform="translate(342.500000, 91.500000) scale(-1, 1) translate(-342.500000, -91.500000) "
            />
            <Path
              d="M322.510638,113 L322.510638,113 C334.150264,113 344,103.150264 344,91.5106383 C344,78.9970664 334.292525,69 322.510638,69 C309.849736,69 300,78.8497355 300,91.5106383 C300,103.292525 309.997066,113 322.510638,113 L322.510638,113 Z M322.510638,115 L322.510638,115 C308.745166,115 298,104.254834 298,91.5106383 C298,77.745166 308.745166,67 322.510638,67 C335.254834,67 346,77.745166 346,91.5106383 C346,104.254834 335.254834,115 322.510638,115 L322.510638,115 Z"
              id="Shape"
              fill="#D9B470"
              transform="translate(322.000000, 91.000000) scale(-1, 1) translate(-322.000000, -91.000000) "
            />
            <Path
              d="M323,65 L323,67 L399,67 L399,65 L323,65 Z M354,62 L352,62 L352,65 L354,65 L354,62 Z M368,62 L366,62 L366,65 L368,65 L368,62 Z M382,62 L380,62 L380,65 L382,65 L382,62 Z"
              id="Rectangle-21"
              fill="#D09F64"
              transform="translate(361.000000, 64.500000) scale(-1, 1) translate(-361.000000, -64.500000) "
            />
            <Path
              d="M323,118 L323,120 L399,120 L399,118 L323,118 Z M354,115 L352,115 L352,118 L354,118 L354,115 Z M368,115 L366,115 L366,118 L368,118 L368,115 Z M382,115 L380,115 L380,118 L382,118 L382,115 Z"
              id="Rectangle-21-Copy"
              fill="#D09F64"
              transform="translate(361.000000, 117.500000) scale(-1, -1) translate(-361.000000, -117.500000) "
            />
            <Circle
              id="Oval-43-Copy"
              fill="#CC7652"
              cx="390.5"
              cy="91.5"
              r="5.5"
            />
            <Circle
              id="Oval-43-Copy-2"
              fill="#CC7652"
              transform="translate(9.500000, 91.500000) scale(-1, 1) translate(-9.500000, -91.500000) "
              cx="9.5"
              cy="91.5"
              r="5.5"
            />
            <Rect
              id="Rectangle-245"
              stroke="#D9B470"
              stroke-width="2"
              x="1"
              y="1"
              width="398"
              height="178"
            />
            <Rect
              id="Rectangle-109"
              fill="#D9B470"
              x="199"
              y="2"
              width="2"
              height="176"
            />
            <Path
              id="ml18-Possession1"
              fill="#CC6029"
              opacity="0"
              d="M398,68 L398,39 L398,22 L339,22 C339,22 285,30 285,92 C285,150 335,161 339,161 L398,161 L398,144 L398,86 L398,68 Z"
              class=""
              style="opacity: 0;"
            />
            <Path
              id="ml18-Possession2"
              fill="#CC6029"
              opacity="0"
              d="M398.3,2 L181.3,2 L171.3,2 L168.3,7 C168.3,7 125,83 125.3,89 C125.6,95 167,173 168.3,175 L170.3,178 L181.3,178 L398.3,178 398.3,2 Z"
              class=""
              style="opacity: 0;"
            />
          </G>
        </G>
        <Path
          id="ml18-twoPointLine1"
          transform="translate(685.500000) scale(-1, 1)"
          d="M286,23 L346,23 C346,23 399,30.8576241 399,92 C399,152.142373 346,160 346,160 L286,160"
          stroke="#D9B470"
          opacity="0"
          stroke-width="2"
        />
        <Path
          id="ml18-twoPointLine2"
          d="M1,23 L61,23 C61,23 114,30.8576241 114,92 C114,152.142373 61,160 61,160 L1,160"
          stroke="#D9B470"
          opacity="0"
          stroke-width="2"
        />
        <Path
          id="ml18-threePointLine1"
          transform="translate(685.500000) scale(-1, 1)"
          d="M286,23 L346,23 C346,23 399,30.8576241 399,92 C399,152.142373 346,160 346,160 L286,160"
          stroke="#E8DBB9"
          opacity="0"
          stroke-width="2"
        />
        <Path
          id="ml18-threePointLine2"
          d="M1,23 L61,23 C61,23 114,30.8576241 114,92 C114,152.142373 61,160 61,160 L1,160"
          stroke="#E8DBB9"
          opacity="0"
          stroke-width="2"
        />
        <G id="ml18-Basket1" fill="none" fill-rule="evenodd" opacity="1">
          <G fill="#DB9F86" transform="translate(2.000000, 80.000000)">
            <Path d="M11.696 4.562l-.09.207c-.076.173-.156.365-.238.57-.257.636-.5 1.298-.72 1.966-.384 1.166-.67 2.265-.846 3.275-.136.78-.205 1.492-.205 2.137 0 3.115.422 4.724 2.098 8.152l.133.045.29-.142.045-.134c-1.64-3.36-2.043-4.893-2.044-7.923 0-.613.065-1.297.196-2.046.172-.983.452-2.058.828-3.2.216-.658.455-1.31.708-1.935.08-.2.16-.39.232-.56l.087-.197-.048-.133-.293-.133-.134.05z" />
            <Path d="M12.165 4.975c.074.167.153.352.235.55.256.617.498 1.26.717 1.91.408 1.215.704 2.357.874 3.4.112.68.167 1.31.165 1.882-.008 3.004-.376 4.355-2.12 7.924l.046.135.29.14.134-.045c1.778-3.638 2.165-5.06 2.173-8.152.002-.602-.056-1.258-.17-1.966-.176-1.074-.478-2.242-.895-3.482-.223-.663-.47-1.317-.73-1.945-.083-.202-.164-.39-.24-.562l-.093-.204-.134-.05-.292.138-.048.133c.02.04.05.11.09.195z" />
            <Path d="M15.83 5.447l-.077.056-.212.157c-.237.18-.49.377-.752.59-.815.656-1.586 1.34-2.285 2.033-1.13 1.12-1.996 2.183-2.57 3.177-1.556 2.698-1.996 4.302-2.258 8.108l.093.107.32.022.107-.093c.258-3.73.677-5.26 2.19-7.883.55-.95 1.387-1.98 2.485-3.066.686-.68 1.444-1.353 2.246-2 .257-.207.506-.4.74-.577l.206-.153.07-.052.024-.14-.187-.262-.14-.023z" />
            <Path d="M16.05 5.827l-.01.112c-.01.097-.023.207-.037.325-.043.368-.097.76-.16 1.166-.202 1.262-.47 2.456-.8 3.535-.335 1.09-.723 2.02-1.16 2.774-1.51 2.597-2.505 3.583-5.8 5.8l-.027.14.18.267.14.027c3.358-2.26 4.404-3.3 5.957-5.973.46-.79.862-1.755 1.208-2.88.34-1.105.613-2.322.817-3.607.066-.413.12-.813.165-1.188.014-.12.026-.233.036-.334l.012-.12-.092-.107-.32-.028-.11.092z" />
            <Path d="M18.967 8.28l-.12.013c-.098.01-.21.024-.328.04-.37.046-.764.104-1.17.17-1.267.212-2.466.485-3.553.816-1.16.352-2.145.76-2.943 1.22-2.697 1.558-3.88 2.727-6.01 5.892l.027.14.268.18.14-.028c2.086-3.1 3.214-4.216 5.837-5.732.76-.44 1.71-.832 2.834-1.174 1.064-.324 2.24-.592 3.485-.8.4-.065.787-.122 1.15-.168.116-.015.224-.028.32-.038l.112-.012.09-.11-.03-.32-.11-.09z" />
            <Path d="M18.967 8.72l-.05.07-.152.21c-.173.234-.365.484-.57.744-.64.807-1.31 1.57-1.992 2.262-1.075 1.092-2.105 1.928-3.07 2.48-2.605 1.496-3.96 1.854-7.922 2.127l-.092.107.023.32.107.094c4.04-.28 5.465-.656 8.147-2.194 1.008-.58 2.073-1.443 3.18-2.568.696-.705 1.378-1.483 2.03-2.304.21-.264.404-.52.58-.76.058-.077.11-.15.157-.214l.056-.077-.025-.14-.264-.183-.14.025z" />
            <Path d="M20.267 12.303l-.208-.092c-.175-.074-.367-.154-.57-.236-.637-.257-1.3-.5-1.967-.72-1.166-.384-2.265-.67-3.276-.846-.778-.136-1.49-.205-2.136-.205-3.113 0-4.722.422-8.15 2.098l-.046.135.14.29.135.045c3.358-1.642 4.892-2.044 7.92-2.045.615 0 1.3.066 2.047.197.985.172 2.06.452 3.202.828.657.216 1.308.455 1.933.708.2.08.39.16.56.233l.198.088.133-.05.134-.293-.05-.132z" />
            <Path d="M20.048 12.683c-.04.02-.11.05-.195.088-.167.075-.352.154-.55.236-.616.256-1.26.498-1.91.717-1.214.41-2.356.704-3.4.874-.68.11-1.308.166-1.88.164-3.006-.007-4.357-.374-7.925-2.12l-.134.047-.14.29.045.133c3.636 1.778 5.06 2.165 8.15 2.173.603.002 1.26-.056 1.967-.17 1.073-.176 2.242-.478 3.482-.895.662-.223 1.316-.47 1.943-.73.202-.083.39-.164.562-.24l.205-.093.048-.133-.137-.29-.132-.05z" />
            <Path d="M19.382 16.436l-.056-.077-.158-.213c-.18-.238-.377-.49-.588-.753-.657-.815-1.342-1.586-2.034-2.285-1.12-1.132-2.183-1.996-3.178-2.57-2.697-1.556-4.3-1.996-8.108-2.26l-.106.094-.022.32.092.108c3.73.257 5.26.676 7.883 2.19.95.548 1.98 1.386 3.068 2.484.68.686 1.352 1.445 2 2.246.206.257.4.506.577.74l.153.206.052.07.14.025.26-.188.025-.14z" />
            <Path d="M19.002 16.656l-.113-.01c-.1-.01-.208-.023-.326-.036-.368-.043-.76-.097-1.166-.162-1.262-.2-2.455-.468-3.535-.8-1.09-.334-2.02-.722-2.773-1.16-2.598-1.51-3.585-2.503-5.803-5.798l-.138-.027-.268.18-.028.138c2.262 3.36 3.3 4.406 5.974 5.96.79.46 1.755.86 2.882 1.207 1.104.34 2.32.612 3.606.816.413.066.812.12 1.187.165.12.014.233.026.334.036l.12.012.11-.09.026-.322-.09-.108z" />
            <Path d="M16.548 19.573l-.012-.12c-.01-.098-.024-.208-.04-.328-.046-.37-.104-.762-.172-1.17-.21-1.266-.483-2.464-.814-3.552-.354-1.16-.76-2.145-1.22-2.943-1.56-2.696-2.728-3.88-5.894-6.01l-.138.027-.18.267.027.14c3.1 2.086 4.216 3.214 5.732 5.837.44.762.83 1.713 1.173 2.835.325 1.065.592 2.242.8 3.486.066.402.123.788.17 1.15l.037.322.012.11.108.09.32-.03.09-.11z" />
            <Path d="M16.11 19.573l-.072-.05-.208-.152c-.235-.172-.486-.364-.745-.57-.807-.64-1.57-1.31-2.262-1.99-1.092-1.076-1.93-2.106-2.482-3.07-1.494-2.606-1.85-3.96-2.125-7.923l-.106-.092-.322.022-.093.106c.28 4.04.655 5.465 2.194 8.147.577 1.008 1.44 2.073 2.566 3.18.705.696 1.483 1.378 2.305 2.03.265.21.52.404.76.58l.214.157.077.055.14-.025.185-.264-.025-.14z" />
          </G>
          <G transform="translate(2.000000, 80.000000)">
            <Path
              d="M12.11 20.343c-4.21 0-7.625-3.414-7.625-7.626 0-4.21 3.415-7.625 7.626-7.625 4.213 0 7.627 3.414 7.627 7.625 0 4.212-3.414 7.626-7.626 7.626zm0 .844c4.68 0 8.47-3.792 8.47-8.47 0-4.677-3.79-8.47-8.47-8.47-4.676 0-8.468 3.793-8.468 8.47 0 4.678 3.792 8.47 8.47 8.47z"
              fill="#CE4628"
            />
            <Path
              d="M2.3 15.07h2.355l.1-.1v-4.506l-.1-.1H2.343l5.09-3.845-.015-.17-.51-.258-.105.01-5.618 4.178-.08.084h-.018l-.1.1v.085l-.006.034.007.014v4.373l.1.1h.007l.002.013.173.183 5.697 4.17.15-.04.238-.53-.032-.122L2.3 15.07z"
              fill="#CE4628"
            />
            <Path fill="#DDB996" d="M0 0h1v25H0z" />
          </G>
        </G>
        <G id="ml18-Basket2" fill="none" fill-rule="evenodd" opacity="1">
          <G
            fill="#DB9F86"
            transform="translate(398.000000, 80.000000) scale(-1, 1)"
          >
            <Path d=" M11.696 4.562l-.09.207c-.076.173-.156.365-.238.57-.257.636-.5 1.298-.72 1.966-.384 1.166-.67 2.265-.846 3.275-.136.78-.205 1.492-.205 2.137 0 3.115.422 4.724 2.098 8.152l.133.045.29-.142.045-.134c-1.64-3.36-2.043-4.893-2.044-7.923 0-.613.065-1.297.196-2.046.172-.983.452-2.058.828-3.2.216-.658.455-1.31.708-1.935.08-.2.16-.39.232-.56l.087-.197-.048-.133-.293-.133-.134.05z" />
            <Path d="M12.165 4.975c.074.167.153.352.235.55.256.617.498 1.26.717 1.91.408 1.215.704 2.357.874 3.4.112.68.167 1.31.165 1.882-.008 3.004-.376 4.355-2.12 7.924l.046.135.29.14.134-.045c1.778-3.638 2.165-5.06 2.173-8.152.002-.602-.056-1.258-.17-1.966-.176-1.074-.478-2.242-.895-3.482-.223-.663-.47-1.317-.73-1.945-.083-.202-.164-.39-.24-.562l-.093-.204-.134-.05-.292.138-.048.133c.02.04.05.11.09.195z" />
            <Path d="M15.83 5.447l-.077.056-.212.157c-.237.18-.49.377-.752.59-.815.656-1.586 1.34-2.285 2.033-1.13 1.12-1.996 2.183-2.57 3.177-1.556 2.698-1.996 4.302-2.258 8.108l.093.107.32.022.107-.093c.258-3.73.677-5.26 2.19-7.883.55-.95 1.387-1.98 2.485-3.066.686-.68 1.444-1.353 2.246-2 .257-.207.506-.4.74-.577l.206-.153.07-.052.024-.14-.187-.262-.14-.023z" />
            <Path d="M16.05 5.827l-.01.112c-.01.097-.023.207-.037.325-.043.368-.097.76-.16 1.166-.202 1.262-.47 2.456-.8 3.535-.335 1.09-.723 2.02-1.16 2.774-1.51 2.597-2.505 3.583-5.8 5.8l-.027.14.18.267.14.027c3.358-2.26 4.404-3.3 5.957-5.973.46-.79.862-1.755 1.208-2.88.34-1.105.613-2.322.817-3.607.066-.413.12-.813.165-1.188.014-.12.026-.233.036-.334l.012-.12-.092-.107-.32-.028-.11.092z" />
            <Path d="M18.967 8.28l-.12.013c-.098.01-.21.024-.328.04-.37.046-.764.104-1.17.17-1.267.212-2.466.485-3.553.816-1.16.352-2.145.76-2.943 1.22-2.697 1.558-3.88 2.727-6.01 5.892l.027.14.268.18.14-.028c2.086-3.1 3.214-4.216 5.837-5.732.76-.44 1.71-.832 2.834-1.174 1.064-.324 2.24-.592 3.485-.8.4-.065.787-.122 1.15-.168.116-.015.224-.028.32-.038l.112-.012.09-.11-.03-.32-.11-.09z" />
            <Path d="M18.967 8.72l-.05.07-.152.21c-.173.234-.365.484-.57.744-.64.807-1.31 1.57-1.992 2.262-1.075 1.092-2.105 1.928-3.07 2.48-2.605 1.496-3.96 1.854-7.922 2.127l-.092.107.023.32.107.094c4.04-.28 5.465-.656 8.147-2.194 1.008-.58 2.073-1.443 3.18-2.568.696-.705 1.378-1.483 2.03-2.304.21-.264.404-.52.58-.76.058-.077.11-.15.157-.214l.056-.077-.025-.14-.264-.183-.14.025z" />
            <Path d="M20.267 12.303l-.208-.092c-.175-.074-.367-.154-.57-.236-.637-.257-1.3-.5-1.967-.72-1.166-.384-2.265-.67-3.276-.846-.778-.136-1.49-.205-2.136-.205-3.113 0-4.722.422-8.15 2.098l-.046.135.14.29.135.045c3.358-1.642 4.892-2.044 7.92-2.045.615 0 1.3.066 2.047.197.985.172 2.06.452 3.202.828.657.216 1.308.455 1.933.708.2.08.39.16.56.233l.198.088.133-.05.134-.293-.05-.132z" />
            <Path d="M20.048 12.683c-.04.02-.11.05-.195.088-.167.075-.352.154-.55.236-.616.256-1.26.498-1.91.717-1.214.41-2.356.704-3.4.874-.68.11-1.308.166-1.88.164-3.006-.007-4.357-.374-7.925-2.12l-.134.047-.14.29.045.133c3.636 1.778 5.06 2.165 8.15 2.173.603.002 1.26-.056 1.967-.17 1.073-.176 2.242-.478 3.482-.895.662-.223 1.316-.47 1.943-.73.202-.083.39-.164.562-.24l.205-.093.048-.133-.137-.29-.132-.05z" />
            <Path d="M19.382 16.436l-.056-.077-.158-.213c-.18-.238-.377-.49-.588-.753-.657-.815-1.342-1.586-2.034-2.285-1.12-1.132-2.183-1.996-3.178-2.57-2.697-1.556-4.3-1.996-8.108-2.26l-.106.094-.022.32.092.108c3.73.257 5.26.676 7.883 2.19.95.548 1.98 1.386 3.068 2.484.68.686 1.352 1.445 2 2.246.206.257.4.506.577.74l.153.206.052.07.14.025.26-.188.025-.14z" />
            <Path d="M19.002 16.656l-.113-.01c-.1-.01-.208-.023-.326-.036-.368-.043-.76-.097-1.166-.162-1.262-.2-2.455-.468-3.535-.8-1.09-.334-2.02-.722-2.773-1.16-2.598-1.51-3.585-2.503-5.803-5.798l-.138-.027-.268.18-.028.138c2.262 3.36 3.3 4.406 5.974 5.96.79.46 1.755.86 2.882 1.207 1.104.34 2.32.612 3.606.816.413.066.812.12 1.187.165.12.014.233.026.334.036l.12.012.11-.09.026-.322-.09-.108z" />
            <Path d="M16.548 19.573l-.012-.12c-.01-.098-.024-.208-.04-.328-.046-.37-.104-.762-.172-1.17-.21-1.266-.483-2.464-.814-3.552-.354-1.16-.76-2.145-1.22-2.943-1.56-2.696-2.728-3.88-5.894-6.01l-.138.027-.18.267.027.14c3.1 2.086 4.216 3.214 5.732 5.837.44.762.83 1.713 1.173 2.835.325 1.065.592 2.242.8 3.486.066.402.123.788.17 1.15l.037.322.012.11.108.09.32-.03.09-.11z" />
            <Path d="M16.11 19.573l-.072-.05-.208-.152c-.235-.172-.486-.364-.745-.57-.807-.64-1.57-1.31-2.262-1.99-1.092-1.076-1.93-2.106-2.482-3.07-1.494-2.606-1.85-3.96-2.125-7.923l-.106-.092-.322.022-.093.106c.28 4.04.655 5.465 2.194 8.147.577 1.008 1.44 2.073 2.566 3.18.705.696 1.483 1.378 2.305 2.03.265.21.52.404.76.58l.214.157.077.055.14-.025.185-.264-.025-.14z" />
          </G>
          <G transform="translate(398.000000, 80.000000) scale(-1, 1)">
            <Path
              d="M12.11 20.343c-4.21 0-7.625-3.414-7.625-7.626 0-4.21 3.415-7.625 7.626-7.625 4.213 0 7.627 3.414 7.627 7.625 0 4.212-3.414 7.626-7.626 7.626zm0 .844c4.68 0 8.47-3.792 8.47-8.47 0-4.677-3.79-8.47-8.47-8.47-4.676 0-8.468 3.793-8.468 8.47 0 4.678 3.792 8.47 8.47 8.47z"
              fill="#CE4628"
            />
            <Path
              d="M2.3 15.07h2.355l.1-.1v-4.506l-.1-.1H2.343l5.09-3.845-.015-.17-.51-.258-.105.01-5.618 4.178-.08.084h-.018l-.1.1v.085l-.006.034.007.014v4.373l.1.1h.007l.002.013.173.183 5.697 4.17.15-.04.238-.53-.032-.122L2.3 15.07z"
              fill="#CE4628"
            />
            <Path fill="#DDB996" d="M0 0h1v25H0z" />
          </G>
        </G>
      </G>
    </Svg>
  );
};

export default BasketballCourt;

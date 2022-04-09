import React from "react";
import {SvgCss} from "react-native-svg";

const iconList = ({tintColor, size}) => {
  const svg = `
 <svg width="${size}" height="${size}" viewBox="0 0 100 100">
    <title>22. Message</title>
    <desc>Created with Sketch.</desc>
    <defs></defs>
    <g id="22.-Message" stroke="none" stroke-width="1" fill="${tintColor}" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
        <g transform="translate(2.000000, 2.000000)" id="Layer-1" stroke="#222F3E" stroke-width="4">
            <path d="M13.0612946,78.5539627 L5.75334225,78.5539627 C2.58017371,78.5539627 0,75.9749715 0,72.7936247 L0,5.76033797 C0,2.58010232 2.57585906,0 5.75334225,0 L90.2466578,0 C93.4198263,0 96,2.57899115 96,5.76033797 L96,72.7936247 C96,75.9738604 93.4241409,78.5539627 90.2466578,78.5539627 L28.5451465,78.5539627 C25.2869782,96 10.4598214,96.0000006 10.4598214,96 C10.4598214,95.9999995 16.0593495,85.8092728 13.0612946,78.5539627 Z"></path>
        </g>
    </g>
</svg>
`;
  return <SvgCss fill={tintColor} xml={svg} />;
};

export default iconList;

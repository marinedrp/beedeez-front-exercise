type Props = {
  color: string;
};


function DocksIcon({color} : Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill={color}
      viewBox="0 0 24 24"
    >
      <g>
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path d="M6 3h7a6 6 0 110 12h-3v6H6V3zm4 4v4h3a2 2 0 100-4h-3z"></path>
      </g>
    </svg>
  );
}

export default DocksIcon;


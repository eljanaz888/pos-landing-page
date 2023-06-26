import React from 'react';

interface IconWebProps {
  color?: string;
  size?: number;
}

export function IconWeb(props: IconWebProps): React.ReactElement {
  const { color = '#000000', size = 30 } = props;

  return (
    <svg
      version="1.1"
      id="Layer_1"
      fill={color}
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 392 392"
      xmlSpace="preserve"
    >
      <polygon points="329.481,136 244.017,136 303.319,0 147.983,0 62.519,196 147.983,196 62.519,392" />
    </svg>
  );
}

import React from 'react';

const CrossInCircleIcon = props => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M0 8c0-4.418 3.581-8 8-8 4.418 0 8 3.582 8 8s-3.582 8-8 8c-4.419 0-8-3.582-8-8zm9.315 2.718c.387.387 1.016.387 1.403 0 .388-.387.388-1.016 0-1.403L9.41 8.007l1.308-1.309c.387-.387.387-1.015 0-1.403-.388-.388-1.016-.388-1.403 0L8.007 6.603 6.694 5.291c-.387-.388-1.016-.388-1.403 0-.388.387-.388 1.015 0 1.403l1.312 1.312-1.312 1.313c-.388.388-.388 1.016 0 1.403.387.388 1.016.388 1.403 0L8.007 9.41l1.308 1.308z"
      />
    </svg>
  );
};

CrossInCircleIcon.defaultProps = {
  fill: '#000',
  width: '1rem',
  height: '1rem',
};

export default CrossInCircleIcon;

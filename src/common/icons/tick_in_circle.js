import React from 'react';

const TickInCircleIcon = (props) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
      <path fillRule="evenodd" d="M8 0c4.418 0 8 3.582 8 8s-3.582 8-8 8c-4.419 0-8-3.582-8-8s3.581-8 8-8zm-.5607 11.0103l4.071-4.071c.391-.391.391-1.024 0-1.414-.391-.391-1.024-.391-1.414 0l-3.364 3.364-.829-.829c-.39-.39-1.023-.39-1.414 0-.39.391-.39 1.024 0 1.415l1.536 1.535c.39.391 1.023.391 1.414 0z" />
    </svg>
  );
};

TickInCircleIcon.defaultProps = {
  fill: '#000',
  width: '1rem',
  height: '1rem',
};

export default TickInCircleIcon;

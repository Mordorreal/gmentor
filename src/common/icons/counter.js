import React from 'react';

const ActiveCounterIcon = (props) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path
        fill="#254483"
        d="M256 7.5v497c137.243 0 248.5-111.257 248.5-248.5S393.243 7.5 256 7.5z"
      />
      <path
        fill="#4ebde7"
        d="M464.5 256C464.5 118.757 371.151 7.5 256 7.5 118.757 7.5 7.5 118.757 7.5 256S118.757 504.5 256 504.5c115.151 0 208.5-111.257 208.5-248.5z"
      />
      <path d="M437.02 74.981C388.667 26.629 324.38 0 256 0 193.371 0 133.084 22.87 86.246 64.396a7.5 7.5 0 009.951 11.224C140.289 36.529 197.041 15 256 15c132.888 0 241 108.112 241 241S388.888 497 256 497 15 388.888 15 256c0-58.959 21.529-115.712 60.62-159.803a7.5 7.5 0 10-11.223-9.951C22.87 133.084 0 193.37 0 256c0 68.38 26.629 132.667 74.98 181.019C123.333 485.371 187.62 512 256 512s132.667-26.629 181.02-74.981C485.371 388.667 512 324.38 512 256s-26.629-132.667-74.98-181.019z" />
    </svg>
  );
};

const InactiveCounterIcon = (props) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path
        fill="#254483"
        d="M256 0v512c141.385 0 256-114.615 256-256S397.385 0 256 0z"
      />
      <path
        fill="#4ebde7"
        d="M470.793 256C470.793 114.615 374.626 0 256 0 114.615 0 0 114.615 0 256s114.615 256 256 256c118.626 0 214.793-114.615 214.793-256z"
      />
    </svg>
  );
};

const CounterIcon = (props) =>
  props.active ? ActiveCounterIcon(props) : InactiveCounterIcon(props);

CounterIcon.defaultProps = {
  width: '1.5rem',
  height: '1.5rem',
  active: false,
};

export default CounterIcon;

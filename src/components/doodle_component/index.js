import React from 'react';

function createRoundDoodle() {
  return {
    __html:
      '<css-doodle>' +
      ':doodle {' +
      '@grid: 1x10 / 100%;' +
      '}' +
      '@place-cell: center;' +
      '@size: calc(@index() * 10%);' +
      'border-radius: 50%;' +
      'border-style: dashed;' +
      'border-width: calc(@index() * 4px);' +
      'border-color: hsla(' +
      'calc(20 * @index()), 70%, 68%,' +
      'calc(3 / @index() * .8)' +
      ');' +
      'transform: rotate(@rand(360deg));' +
      'z-index: -1;' +
      '</css-doodle>',
  };
}

function createBackgroundDoodle() {
  return {
    __html:
      '<css-doodle>' +
      ':doodle {' +
      '@grid: 11 / 100vmax;' +
      '}' +
      '--n: calc(' +
      '@abs(@abs(@row() - 6)' +
      '+ @abs(@col() - 6) - 11) / 11' +
      ');' +
      'margin: -10%;' +
      'transform: rotate(45deg);' +
      'border: 1px solid;' +
      'border-color: hsla(' +
      'calc(var(--n) * 280 + 120), 60%, 68%,' +
      'var(--n)' +
      ');' +
      'z-index: 1;' +
      '</css-doodle>',
  };
}

function createLinesBackground() {
  return {
    __html:
      '<css-doodle>' +
      ':doodle {' +
      '@grid: 20 / 100vmax;' +
      'background: #D8F7FF;' +
      'font-family: sans-serif;' +
      '}' +
      ':after {' +
      `content: "\\@hex(@rand(0x2500, 0x257f))";` +
      'font-size: 5vmax;' +
      'color: hsla(' +
      '@rand(360), 70%, 70%,' +
      '@rand(.9)' +
      ');' +
      '}' +
      '</css-doodle>',
  };
}

const doodle = ({ type }) => {
  const doodleFunc =
    type === 'background'
      ? createBackgroundDoodle
      : type === 'round'
      ? createRoundDoodle
      : createLinesBackground;

  return (
    <div
      style={{ color: 'transparent' }}
      dangerouslySetInnerHTML={doodleFunc()}
    />
  );
};

export default doodle;

import React from 'react';


function createDoodle() {
  return { __html: '<css-doodle> \
  :doodle { \
    @grid: 1x10 / 100%; \
  } \
  \
  @place-cell: center; \
  @size: calc(@index() * 10%); \
  \
  border-radius: 50%; \
  border-style: dashed; \
  border-width: calc(@index() * 4px); \
  border-color: hsla( \
    calc(20 * @index()), 70%, 68%, \
    calc(3 / @index() * .8) \
  ); \
  \
  transform: rotate(@rand(360deg)); \
  z-index: -1; \
  </css-doodle>' };
};

const doodle = () => <div style={{ color: 'transparent' }} dangerouslySetInnerHTML={createDoodle()} />

export default doodle;
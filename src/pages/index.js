import React from 'react'

import Layout from '../components/layout'

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

const IndexPage = () => (
  <Layout>
    <p>
      Добро пожаловать на сайт где вы сможете найти своего персонального
      ментора.
    </p>
    <p>Проложите себе прямой путь в будущее.</p>
    <p>В чем наши преимущества:</p>
    <div dangerouslySetInnerHTML={createDoodle()} />
    <ul>
      <li>Персонализированная программа обучения</li>
      <li>Только актуальные технологии</li>
      <li>Высоко квалифицированные менторы</li>
    </ul>
    <p>Сайт находится в разработке. По всем вопросом писать на:</p>
    <a href="mailto:info@gmentor.online">info@gmentor.online</a>
  </Layout>
)

export default IndexPage

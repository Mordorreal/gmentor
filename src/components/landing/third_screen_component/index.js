import React from 'react';

import TitleComponent from '../title_component';
import ListItemComponent from './list_item_component';

import './third_screen_component.scss';


const ThirdScreenComponent = () => {
  return (
    <div className="third-screen-component">
      <div className="third-screen-component__container">
        <div className="third-screen-component__title">
          <TitleComponent
            title="Пришло время учиться!"
            subtitle="Ваша судьба только в ваших руках. Не тратьте время понапрасну!"
          />
        </div>
        <div className="third-screen-component__list">
          <ListItemComponent text="Индивидульный план развития" />
          <ListItemComponent text="Персональный подход при вашем обучении" />
          <ListItemComponent text="Code review и только актуальные технологии" />
          <ListItemComponent text="Мы знаем как подать информацию правильно" />
          <ListItemComponent text="Отличное соотношение цена/качество" />
        </div>
      </div>
    </div>
  );
};

export default ThirdScreenComponent;

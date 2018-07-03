import React from 'react';

import InformationImage from '../../../common/images/information.svg';
import MoneyBagImage from '../../../common/images/money_bag_with_dollar_symbol.svg';
import RoadImage from '../../../common/images/road_with_broken_line.svg';
import TimeImage from '../../../common/images/clock.svg';

import TitleComponent from '../title_component';

import TextBlockComponent from './text_block_component';

import './second_screen_component.scss';


const SecondScreenComponent = () => {
  return (
    <div className="second-screen-component">
      <div className="second-screen-component__title">
        <TitleComponent
          title="Только лучшее для вас"
          subtitle="Полностью индивидуальный подход"
        />
      </div>
      <div className="second-screen-component__text">
        {"Наши менторы составят для вас план обучения в соответствии с вашими знаниями и предпочтениями. Больше не нужно слушать то, что вы уже слышали по 10 раз. Мы даем только то, что вам действительно нужно."}
      </div>
      <div className="second-screen-component__container">
        <TextBlockComponent
          img={<img src={RoadImage} alt="Максимально короткий путь к цели" />}
          title="Максимально короткий путь к цели"
          subtitle="Вы будете учить только то, что нужно для достижения вашей цели. Фокус и качество подачи материала наш главный плюс."
        />
        <TextBlockComponent
          img={<img src={MoneyBagImage} alt="Только действительно нужные траты"/>}
          title="Только действительно нужные траты"
          subtitle="Индивидульная программа и ваш план обучения позволяют не растрачивать ваш бюджет на не нужную вам информацию."
        />
        <TextBlockComponent
          img={<img src={TimeImage} alt="Время ваш главный актив" />}
          title="Время ваш главный актив"
          subtitle="Сфокусированная программа позволит вам достигнуть ваши цели максимально быстро и в удобное вам время."
        />
        <TextBlockComponent
          img={<img src={InformationImage} alt="Максимально доступная информация" />}
          title="Максимально доступная информация"
          subtitle="Наши менторы постараются объяснить даже самые сложные вещи понятным для вас языком."
        />
      </div>
    </div>
  );
};

export default SecondScreenComponent;

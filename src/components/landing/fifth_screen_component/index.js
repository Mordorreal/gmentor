import React from 'react';

import TitleComponent from '../title_component';
import TestimonialsComponent from './testimonials_component';

import NikitaImg from '../../../common/images/1.jpg';
import SergeyImg from '../../../common/images/5.jpg';
import IgnatImg from '../../../common/images/6.jpg';

import './fifth_screen_component.scss';


const FifthScreenComponent = () => {
  const testimonials = [
    {
      photoUrl: NikitaImg,
      name: 'Никита Логинов',
      position: 'Junior Developer at itsoft.ru',
      text: 'Спасибо GMentor за столь замечательно выстроенный учебный план и за вашу помощь в достижении моих целей!'
    },
    {
      photoUrl: SergeyImg,
      name: 'Сергей Березин',
      position: 'Full-stack web developer at spacebox.ru',
      text: 'Я очень благодарен вашей команде за помощь в устранении пробелов в моих знаниях. Вы мне очень помогли.'
    },
    {
      photoUrl: IgnatImg,
      name: 'Игнат Гаскаров',
      position: 'Founder at Panda Money',
      text: `Вы помогли мне понять как можно достичь мою цель - открыть свой собственный бизнес.`
    }
  ];

  return (
    <div className="fifth-screen-component">
      <div className="fifth-screen-component__title">
        <TitleComponent
          title="Что говорят о нас люди"
          subtitle="Отзывы людей уже закончивших у нас обучение"
        />
      </div>
      <div className="fifth-screen-component__testimonials">
        <TestimonialsComponent testimonials={testimonials} />
      </div>
    </div>
  );
};

export default FifthScreenComponent;

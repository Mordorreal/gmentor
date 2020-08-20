import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';

import TitleComponent from '../title_component';
import TestimonialsComponent from './testimonials_component';

import NikitaImg from '../../../common/images/1.jpg';
import SergeyImg from '../../../common/images/5.jpg';
import IgnatImg from '../../../common/images/6.jpg';

import './fifth_screen_component.scss';

const FifthScreenComponent = () => {
  const intl = useIntl();

  const testimonials = [
    {
      photoUrl: NikitaImg,
      name: intl.formatMessage({ id: 'nikita_loginov' }),
      position: 'Junior Developer at itsoft.ru',
      text: intl.formatMessage({ id: 'nikita_loginov_feedback' }),
    },
    {
      photoUrl: SergeyImg,
      name: intl.formatMessage({ id: 'sergey_berezin' }),
      position: 'Full-stack web developer at spacebox.ru',
      text: intl.formatMessage({ id: 'sergey_berezin_feedback' }),
    },
    {
      photoUrl: IgnatImg,
      name: intl.formatMessage({ id: 'ignat_gaskarov' }),
      position: 'Founder at Panda Money',
      text: intl.formatMessage({ id: 'ignat_gaskarov_feedback' }),
    },
  ];

  return (
    <div className="fifth-screen-component">
      <div className="fifth-screen-component__title">
        <TitleComponent
          title={intl.formatMessage({ id: 'what_people_says' })}
          subtitle={intl.formatMessage({ id: 'people_feedback' })}
        />
      </div>
      <div className="fifth-screen-component__testimonials">
        <TestimonialsComponent testimonials={testimonials} />
      </div>
    </div>
  );
};

export default FifthScreenComponent;

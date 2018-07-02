import React from 'react';

import TitleComponent from '../title_component';

import './forth_screen_component.scss';


const ForthScreenComponent = () => {
  return (
    <div className="forth-screen-component">
      <div className="forth-screen-component__title">
        <TitleComponent
          title="Мы поможем Вам"
          subtitle={`Вы хотите получить работу программиста? Или повысить квалификацию?`}
        />
      </div>
      <div className="forth-screen-component__video">
        <iframe
          title="main-video"
          allowFullScreen
          frameBorder="0"
          src=""
        />
      </div>
    </div>
  );
};

export default ForthScreenComponent;

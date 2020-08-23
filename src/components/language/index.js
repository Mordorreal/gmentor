import React from 'react';
import { IntlContextConsumer, changeLocale } from 'gatsby-plugin-intl';

import RussianFlag from '../../common/images/russia.svg';
import UnitedKingdomFlag from '../../common/images/united-kingdom.svg';
import './language.scss';

const languageName = {
  en: UnitedKingdomFlag,
  ru: RussianFlag,
};

const handleKeyDown = (language) => (event) => {
  if (event.key === 'Enter' || event.key === 'Space') {
    changeLocale(language);
  }
};

const Language = () => {
  return (
    <div className="language-component">
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) =>
          languages.map((language) => (
            <div
              className="language-component__link"
              key={language}
              onClick={() => changeLocale(language)}
              onKeyDown={handleKeyDown(language)}
              role="button"
              tabIndex="0"
            >
              <img
                alt={`${language} icon`}
                className="language-component__icon"
                src={languageName[language]}
              />
            </div>
          ))
        }
      </IntlContextConsumer>
    </div>
  );
};

export default Language;

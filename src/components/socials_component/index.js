import React from 'react';

import { LinkedInIcon, FacebookIcon, TwitterIcon } from '../../common/icons/socials';

import './socials_component.scss';


const SocialsComponent = () => {
  return (
    <div className="socials-component">
      <div className="socials-component__icon">
        <a tabIndex="0" href="" target="_blank" rel="noopener noreferrer">
          <TwitterIcon width="28px" />
        </a>
      </div>
      <div className="socials-component__icon">
        <a tabIndex="0" href="" target="_blank" rel="noopener noreferrer">
          <FacebookIcon width="28px" />
        </a>
      </div>
      <div className="socials-component__icon">
        <a tabIndex="0" href="" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon width="28px" />
        </a>
      </div>
    </div>
  );
};

export default SocialsComponent;

import React from 'react';

import './copyright_component.scss';


const CopyrightComponent = () => {
  return (
    <div className="copyright-component">
      {`Copyright © ${new Date().getFullYear()}. All rights reserved`}
    </div>
  );
};

export default CopyrightComponent;

import React from 'react';

import './copyright_component.scss';

const CopyrightComponent = () => {
  return (
    <div className="copyright-component">
      {`Copyright © 2018 - ${new Date().getFullYear()}. All rights reserved`}
    </div>
  );
};

export default CopyrightComponent;

import React from 'react';

import './FullPageLayout.scss';

function FullPageLayout({ BLOCK, children}) {
  return (
    <div id={BLOCK} className={`full-page-layout ${BLOCK}`}>
      <div className={`container ${BLOCK}__container`}>
        {children}
      </div>
    </div>
  )
}

export default FullPageLayout;
import React from 'react';

const BasicLayout = props => {
  const { children } = props;
  return (
    <div>
      {children}
    </div>
  )
}

export default BasicLayout;

import React from 'react';

import styles from './index.less';

const GlobalFooter = props => {
  return (
    <footer>
      <div className={styles.container}>
        <p>Copyright © Alstar. All rights reserved.</p>
        <p> Designed by <a href="/">BootstrapMade</a>
        </p>
      </div>
    </footer>
  )
}

export default GlobalFooter;

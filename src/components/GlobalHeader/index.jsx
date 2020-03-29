import React, { useState } from 'react';
import classNames from 'classnames';
import { Link } from 'react-scroll';

import styles from './index.less';

const GlobalHeader = props => {
  const { menu, className } = props;
  const [collapse, setCollapse] = useState(false);

  return (
    <nav className={classNames(styles.nav, className)}>
      <div className={styles.container}>
        <div className={styles.navbarHeader}>
          <button className={styles.navbarToggle} onClick={() => setCollapse(!collapse)}>
            <span className={styles.iconBar} />
            <span className={styles.iconBar} />
            <span className={styles.iconBar} />
          </button>
          <a className={styles.navbarBrand} href="/">Alstar</a>
        </div>
        <div className={classNames(styles.navigation, {
          [styles.collapse]: collapse
        })}>
          <ul className={styles.menu}>
            {menu.map(item => (
              <li
                key={item.name}
              >
                <Link activeClass="active" to={item.name} spy={true} smooth={true}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default GlobalHeader;

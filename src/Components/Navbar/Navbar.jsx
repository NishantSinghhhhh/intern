import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <>
      <div className={styles.upper}>
        Book Generator API
      </div>
      <nav className={styles.navbar}>
        <ul className={styles.navbarlist}>
          <li className={styles.navbaritem}>Overview</li>
          <li className={styles.navbaritem}>Authentication</li>
          <li className={styles.navbaritem}>Endpoints</li>
          <li className={styles.navbaritem}>Tutorial</li>
          <li className={styles.navbaritem}>Code Examples</li>
          <li className={styles.navbaritem}>Pricing</li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

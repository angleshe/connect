import React from 'react';
import User from './component/user';
import styles from './index.less';
import Advertisement from './component/advertisement';

const BlogLayout: React.FC = (props) => (
  <div className={styles['blog-layout']}>
    <header className={styles.header}></header>
    <div className={styles.container}>
      <div className={styles['main-container']}>{props.children}</div>
      <ul className={styles['side-bar']}>
        <li className={styles['bar-item']}>
          <User />
        </li>
        <li className={styles['bar-item']}>
          <Advertisement />
        </li>
      </ul>
    </div>
  </div>
);

export default BlogLayout;
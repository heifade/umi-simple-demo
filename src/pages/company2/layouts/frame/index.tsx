import React from 'react';
import styles from './styles.less';

export default props => {
  return (
    <div className={styles.frame}>
      <div className={styles.body}>
        <div className={styles.menu}>这是菜单</div>
        <div className={styles.main}>{props.children}</div>
      </div>
      <div className={styles.header}>这是TitleBar</div>
    </div>
  );
};

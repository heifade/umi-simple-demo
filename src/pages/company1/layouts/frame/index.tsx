import React from 'react';
import styles from './styles.less';
import withRouter from 'umi/withRouter';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

export default withRouter(({ location, children }) => (
  <div className={styles.frame}>
    <div className={styles.header}>这是TitleBar</div>
    <div className={styles.body}>
      <div className={styles.menu}>这是菜单</div>
      <div className={styles.main}>
        <TransitionGroup>
          <CSSTransition key={location.pathname} classNames="fade" timeout={1000}>
            {children}
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  </div>
));

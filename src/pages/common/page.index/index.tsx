import React from 'react';
import styles from './index.less';
import { Button } from 'antd';
import router from 'umi/router';

export default function() {
  return (
    <div className={styles.normal}>
      <Button onClick={() => router.push('/company1/aa')}>跳转</Button>
    </div>
  );
}

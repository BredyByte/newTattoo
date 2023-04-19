import React from 'react';
import styles from './WorksPageList.module.scss';
import { WorksPageItem } from '../../components';
import { worksData } from '../../assets/data';

export const WorksPageList = () => {
  return (
    <section className={styles.root}>
      {worksData.map((i, index) => (
        <WorksPageItem key={index} data={i} />
      ))}
    </section>
  );
};

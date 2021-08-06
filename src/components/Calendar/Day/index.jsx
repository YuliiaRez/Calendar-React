import React from 'react';
import { format } from 'date-fns';
import styles from '../Calendar.module.scss';



function Day() {
  const currentDate = new Date();
  return (
    <section>
      <div className={styles.dayOfWeek}>{format(currentDate, 'eeee')}</div>
      <div className={styles.dayCurrent}>{currentDate.getDate()}</div>
    </section>
  );
}

export default Day;

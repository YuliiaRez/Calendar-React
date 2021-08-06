import React from 'react';
import styles from '../Calendar.module.scss';
import { isSameDay } from 'date-fns';
import classNames from 'classnames';

function CalendarDate(props) {
  const { day, month, curYear, xMonth } = props;
  const curDay = new Date(curYear, month, day);
  const tdClassName = classNames(

    [styles.dayNumbers]
    ,
    {
      [styles.today]: isSameDay(new Date(), curDay)
    },
    {
      [styles.xMonth]: xMonth !== curDay.getMonth()
    }
  );
  return <td className={tdClassName} >{day}</td>;

}
export default CalendarDate;

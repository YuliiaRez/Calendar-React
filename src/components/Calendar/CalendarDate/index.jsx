import React from 'react';
import styles from '../Calendar.module.scss';
import { format } from 'date-fns';
import classNames from 'classnames';

function CalendarDate(props) {
  const curDay = new Date();
  const { day, month } = props;
  const tdClassName = classNames({ [styles.today]: day === curDay.getDate() }, { [styles.xMonth]: month !== curDay.getMonth() })
  return <td className={tdClassName} >{day}</td>;

}
export default CalendarDate;

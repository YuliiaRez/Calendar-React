import { parse, addDays } from 'date-fns';
import React from 'react';
import CalendarDate from './../CalendarDate';
import PropTypes from 'prop-types';

const getDaysOfWeek = (week, year) => {
  const startOfWeek = parse(`${year} ${week}`, 'Y w', new Date());
  const days = [];
  for (let i = 0; i < 7; ++i) {
    const dateIndex = addDays(startOfWeek, i);
    days.push(<CalendarDate day={dateIndex.getDate()} month={dateIndex.getMonth()} curYear={dateIndex.getFullYear()} xMonth={xMonth} />);
  }
  return days;
};
let xMonth = 0;
function Week(props) {
  const { week, year, date } = props;
  xMonth = date.getMonth();
  return <tr>{getDaysOfWeek(week, year)}</tr>;
}

Week.propTypes = {
  week: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
};

export default Week;

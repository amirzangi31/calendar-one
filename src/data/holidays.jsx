import { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

const holidays = [
  //فروردین
  {
    date: new DateObject({
      date: "1402/01/01",
      format: "YYYY/MM/DD",
      calendar: persian,
      locale: persian_fa,
    }),
  },
  {
    date: new DateObject({
      date: "1402/01/02",
      format: "YYYY/MM/DD",
      calendar: persian,
      locale: persian_fa,
    }),
  },
  {
    date: new DateObject({
      date: "1402/01/03",
      format: "YYYY/MM/DD",
      calendar: persian,
      locale: persian_fa,
    }),
  },
  {
    date: new DateObject({
      date: "1402/01/12",
      format: "YYYY/MM/DD",
      calendar: persian,
      locale: persian_fa,
    }),
  },
  {
    date: new DateObject({
      date: "1402/01/13",
      format: "YYYY/MM/DD",
      calendar: persian,
      locale: persian_fa,
    }),
  },
  {
    date: new DateObject({
      date: "1402/01/23",
      format: "YYYY/MM/DD",
      calendar: persian,
      locale: persian_fa,
    }),
  },
  //اردیبهشت
  {
    date: new DateObject({
      date: "1402/02/2",
      format: "YYYY/MM/DD",
      calendar: persian,
      locale: persian_fa,
    }),
  },
  {
    date: new DateObject({
      date: "1402/02/3",
      format: "YYYY/MM/DD",
      calendar: persian,
      locale: persian_fa,
    }),
  },
  {
    date: new DateObject({
      date: "1402/02/23",
      format: "YYYY/MM/DD",
      calendar: persian,
      locale: persian_fa,
    }),
  },
  //خرداد
  {
    date: new DateObject({
      date: "1402/03/14",
      format: "YYYY/MM/DD",
      calendar: persian,
      locale: persian_fa,
    }),
  },
  {
    date: new DateObject({
      date: "1402/03/15",
      format: "YYYY/MM/DD",
      calendar: persian,
      locale: persian_fa,
    }),
  },
  //تیر
  {
    date: new DateObject({
      date: "1402/4/8",
      format: "YYYY/MM/DD",
      calendar: persian,
      locale: persian_fa,
    }),
  },
  //مرداد
  {
    date: new DateObject({
      date: "1402/5/5",
      format: "YYYY/MM/DD",
      calendar: persian,
      locale: persian_fa,
    }),
  },
  {
    date: new DateObject({
      date: "1402/5/6",
      format: "YYYY/MM/DD",
      calendar: persian,
      locale: persian_fa,
    }),
  },
  //شهریور
  {
    date: new DateObject({
      date: "1402/6/15",
      format: "YYYY/MM/DD",
      calendar: persian,
      locale: persian_fa,
    }),
  },
  {
    date: new DateObject({
      date: "1402/6/23",
      format: "YYYY/MM/DD",
      calendar: persian,
      locale: persian_fa,
    }),
  },
  {
    date: new DateObject({
      date: "1402/6/25",
      format: "YYYY/MM/DD",
      calendar: persian,
      locale: persian_fa,
    }),
  },
  //مهر
  {
    date: new DateObject({
      date: "1402/7/2",
      format: "YYYY/MM/DD",
      calendar: persian,
      locale: persian_fa,
    }),
  },
  {
    date: new DateObject({
      date: "1402/7/11",
      format: "YYYY/MM/DD",
      calendar: persian,
      locale: persian_fa,
    }),
  },
  //آذر
  {
    date: new DateObject({
      date: "1402/9/26",
      format: "YYYY/MM/DD",
      calendar: persian,
      locale: persian_fa,
    }),
  },
  //بهمن
  {
    date: new DateObject({
      date: "1402/11/22",
      format: "YYYY/MM/DD",
      calendar: persian,
      locale: persian_fa,
    }),
  },
  //اسفند
  {
    date: new DateObject({
      date: "1402/12/6",
      format: "YYYY/MM/DD",
      calendar: persian,
      locale: persian_fa,
    }),
  },
  {
    date: new DateObject({
      date: "1402/12/29",
      format: "YYYY/MM/DD",
      calendar: persian,
      locale: persian_fa,
    }),
  },
];
export default holidays;

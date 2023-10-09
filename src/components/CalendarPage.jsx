import React, { useState } from "react";
import { Calendar } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import holidays from "../data/holidays";

import { convertDates, convertToString } from "../helper/functions";

import DatePanel from "react-multi-date-picker/plugins/date_panel";

const CalendarPage = () => {
  const [value, setValue] = useState([]);
  const [result, setResult] = useState("");

  const submitHandler = () => {
    //conver dates (persian to english)
    const covertDate = convertDates(value);
    // convert to string
    const result = convertToString(covertDate);
    if (!result.length) {
      setResult("هیچ تاریخی انتخاب نکردید");
    } else {
      setResult(result);
    }
  };

  return (
    <div>
      <div className=" min-h-screen flex justify-around flex-col items-center">
        <h1 className="text-3xl ">
          جهت انتخاب یک روز بروی روز مورد نظر دابل کلیک کنید
        </h1>
        <Calendar
          range
          multiple={true}
          className="bg-teal-300 shadow-3xl rounded-lg "
          value={value}
          onChange={setValue}
          format="YYYY/MM/DD"
          plugins={[
           
            <DatePanel sort="date" position="left" />
          ]}
          mapDays={({ date, isSameDate,selectedDate }) => {
            let props = {};
            props.className = "rounded-[3px]  text-white";

            if (date.weekDay.index === 6) props.className = "text-orange-800";

            for (let i = 0; i < holidays.length; i++) {
              if (isSameDate(date, holidays[i].date)) {
                props.className = `${props.className} text-red-800 bg-red-300`;
              }
            }

            if(isSameDate(date, selectedDate)) props.className = "text-purple-900"

            return props;
          }}
          calendar={persian}
          locale={persian_fa}
          calendarPosition="bottom-right"
        />
        <p className={`${!value.length ? "text-red-500" : "text-xl"}`}>
          {result}
        </p>
        <button
          type="button"
          onClick={submitHandler}
          className="bg-teal-300 text-white rounded-lg shadow-md w-[200px] h-[40px] "
        >
          چاپ خروجی تقویم
        </button>
      </div>
    </div>
  );
};

export default CalendarPage;

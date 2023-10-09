import gregorian from "react-date-object/calendars/gregorian";
import gregorian_en from "react-date-object/locales/gregorian_en";

//conver dates (persian to english)
const convertDates = (value) => {
  let newArray = [];

  for (const val of value) {
    const test = val.map((item) => {
      return item.convert(gregorian, gregorian_en).format("YYYY/MM/DD");
    });

    newArray = [...newArray, test];
  }
  return newArray;
};
const convertToString = (value) => {
  const resultArray = [];

  for (const val of value) {
    //To check for duplicates in an array in JavaScript and remove
    const setArray = new Set(val);
    const newArray = Array.from(setArray);

    if (newArray.length === 1) {
      //convert to ("2023/11/23")
      resultArray.push(newArray.join(" "));
    } else {
      //convert to ("2023/11/11:2023/11/28")
      resultArray.push(val.join(":"));
    }
  }
  //   convert to string
  return resultArray.join(",");
};

export { convertToString, convertDates };

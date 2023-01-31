import { useState } from "react";

import Picker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const DatePicker = ({ className }) => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <Picker className={className} selected={startDate} onChange={(date) => setStartDate(date)} />
  );
};

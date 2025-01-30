import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const BasicDatePicker = () => {
  const [startDate, setStartDate] = useState<Dayjs | null>(dayjs());
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        value={startDate}
        onChange={(date) => setStartDate(date)}
        label="Pick a Date"
      />
    </LocalizationProvider>
  );
};

export default BasicDatePicker;

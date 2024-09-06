import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDateTimePicker } from "@mui/x-date-pickers/MobileDateTimePicker";
import { Dayjs } from "dayjs";

interface CalendarProps {
  onDateChange: (date: Dayjs | null) => void;
}

const Calendar: React.FC<CalendarProps> = ({ onDateChange }) => {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["MobileDateTimePicker"]}>
          <MobileDateTimePicker
            label="Elige fecha y hora de inicio"
            onChange={(date) => onDateChange(date)}
          />
        </DemoContainer>
      </LocalizationProvider>
    </>
  );
};

export default Calendar;
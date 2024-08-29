import React from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const DatePickerField = () => {
    const [fromDate, setFromDate] = React.useState(dayjs());
    const [toDate, setToDate] = React.useState(dayjs().add(1, 'day')); // Initialize with one day after the current date

    // Update "To" date when "From" date changes
    React.useEffect(() => {
        setToDate(fromDate.add(1, 'day'));
    }, [fromDate]);

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker', 'DatePicker']}>
                <DatePicker
                    label="From"
                    value={fromDate}
                    onChange={(newValue) => {
                        setFromDate(newValue);
                        // Automatically update the "To" date when the "From" date changes
                        setToDate(newValue ? newValue.add(1, 'day') : null);
                    }}
                />
                <DatePicker
                    label="To"
                    value={toDate}
                    onChange={(newValue) => setToDate(newValue)}
                    minDate={fromDate.add(1, 'day')} // Ensure the "To" date is at least one day after the "From" date
                />
            </DemoContainer>
        </LocalizationProvider>
    );
};

export default DatePickerField;

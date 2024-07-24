'use client'

import { useState } from "react";
import { Calendar, Range, RangeKeyDict } from "react-date-range";

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

interface CalendarProps {
    value: Date;
    onChange: (value: Date) => void;
    disabledDates?: Date[]
}

const InterviewCalendar: React.FC<CalendarProps> = ({
    value,
    onChange,
    disabledDates,
}) => {
    const [newDate,setNewDate] = useState<Date>(value);

    return (
        <Calendar 
            color="#262626"
            rangeColors={["#262626"]}
            date={newDate}
            onChange={
                (value)=>{
                    onChange(value);
                    setNewDate(value);
                }
            }
            direction="vertical"
            minDate={new Date('2022-05-10')}
            maxDate={new Date('2022-05-13')}
            displayMode="date"
            showDateDisplay={false}
        />
    )
}

export default InterviewCalendar
'use client';

import { format } from "date-fns";
import Button from "../Button";
import Calendar from "../inputs/Calendar";

import { Range } from "react-date-range";

interface CompanyInterviewProps {
  interviewDate: Date,
  onChangeDate: (value: Date) => void;
  onSubmit: () => void;
  disabled?: boolean;
  disabledDates?: Date[];
}

const CompanyInterview: React.FC<
  CompanyInterviewProps
> = ({
  interviewDate,
  onChangeDate,
  onSubmit,
  disabled,
  disabledDates
}) => {
  return ( 
    <div 
      className="
      bg-white 
        rounded-xl 
        border-[1px]
      border-neutral-200 
        overflow-hidden
      "
    >
      <div className="
      flex flex-row items-center gap-1 p-4">
        <div className="text-xl font-semibold">
          Book an interview with us!
        </div>
      </div>
      <hr />
      <Calendar
        value={interviewDate}
        disabledDates={disabledDates}
        onChange={(value) => onChangeDate(value)}
      />
      <hr />
      <div className="p-4">
        <Button 
          disabled={disabled} 
          label="Book Interview" 
          onClick={onSubmit}
        />
      </div>
      <hr />
      <div 
        className="
          p-4 
          flex 
          flex-row 
          items-center 
          justify-between
          font-semibold
          text-lg
        "
      >
        <div>
          Booked interview date:
        </div>
        <div>
          {format(interviewDate, 'MMM do yyyy')}
        </div>
      </div>
    </div>
   );
}
 
export default CompanyInterview;
import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import MomentLocaleUtils, { formatDate, parseDate } from 'react-day-picker/moment';
import 'moment/locale/fi';

const DayPickerComponent = ({placeholder, onDayChange, selectedDays, disabledDays, mode}) => {
  return (
    <div className="date-picker">
      <DayPickerInput
        formatDate={formatDate}
        parseDate={parseDate}
        placeholder={`${formatDate(new Date())}`}
        onDayChange={onDayChange}
        dayPickerProps={{
          selectedDays: selectedDays,
          disabledDays: { [mode]: disabledDays },
          locale: 'fi',
          localeUtils: MomentLocaleUtils,
          todayButton: 'Tänään',
        }}
      />
    </div>
  );
}

export default DayPickerComponent;

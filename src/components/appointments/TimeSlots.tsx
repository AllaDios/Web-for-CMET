import React from 'react';

interface TimeSlotsProps {
  availableSlots: string[];
  selectedTime: string | null;
  onTimeSelect: (time: string) => void;
}

export function TimeSlots({ availableSlots, selectedTime, onTimeSelect }: TimeSlotsProps) {
  return (
    <div className="grid grid-cols-3 gap-2 mt-4">
      {availableSlots.map((time) => (
        <button
          key={time}
          onClick={() => onTimeSelect(time)}
          className={`
            p-2 rounded-md text-sm font-medium
            ${selectedTime === time
              ? 'bg-[#17A99F] text-white'
              : 'bg-gray-100 hover:bg-[#17A99F]/10'
            }
          `}
        >
          {time}
        </button>
      ))}
    </div>
  );
}
import { useState } from "react"
import Calendar from "@demark-pro/react-booking-calendar"

const reserved = [
  {
    startDate: new Date(2023, 3, 22),
    endDate: new Date(2016, 4, 5),
  },
]

export default function BookingCalendar() {
  const [selectedDates, setSelectedDates] = useState<
    [Date | null, Date | null] | []
  >([])
  const handleChange = (e: any) => {
    const [startDate, endDate] = e
    if (!selectedDates[0]) {
      setSelectedDates([startDate, endDate])
      return
    }

    if (!endDate && startDate > selectedDates[0]) {
      setSelectedDates([selectedDates[0], startDate])
      return
    }

    setSelectedDates([startDate, null])
  }

  return (
    <Calendar
      selected={selectedDates}
      onChange={handleChange}
      //   onOverbook={(e, err) => alert(err)}
      //   components={{
      //     DayCellFooter: ({ innerProps }) => (
      //       <div {...innerProps}>335$</div>
      //     ),
      //   }}
      //   disabled={(date, state) => !state.isSameMonth}
      //   reserved={reserved}
      //   variant="events"
      //   dateFnsOptions={{ weekStartsOn: 1 }}
      //   range={true}
    />
  )
}

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, MoreVertical, Plus } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const appointmentsByDate = {
  "2024-10-25": [
    {
      id: 1,
      name: "Mike Robin",
      time: "12:00",
      type: "Consultation",
      avatar: "/placeholder.svg?height=40&width=40",
      isMember: false,
      isHighlighted: false,
    },
    {
      id: 2,
      name: "Jane Black",
      time: "14:00",
      type: "Wisdom Teeth Removal",
      avatar: "/placeholder.svg?height=40&width=40",
      isMember: true,
      isHighlighted: false,
    },
  ],
  "2024-10-26": [
    {
      id: 3,
      name: "Esther Wilson",
      time: "11:00",
      type: "Bleaching",
      avatar: "/placeholder.svg?height=40&width=40",
      isMember: true,
      isHighlighted: true,
    },
    {
      id: 4,
      name: "Andy Mcconnell",
      time: "12:30",
      type: "Scaling",
      avatar: "/placeholder.svg?height=40&width=40",
      isMember: false,
      isHighlighted: false,
    },
    {
      id: 5,
      name: "Melisa Cooper",
      time: "13:45",
      type: "Consultation",
      avatar: "/placeholder.svg?height=40&width=40",
      isMember: false,
      isHighlighted: false,
    },
  ],
  "2024-10-27": [
    {
      id: 6,
      name: "Desmond Tutu",
      time: "09:00",
      type: "Checkup",
      avatar: "/placeholder.svg?height=40&width=40",
      isMember: false,
      isHighlighted: false,
    },
  ],
  "2024-10-28": [
    {
      id: 7,
      name: "Oladejo Israel",
      time: "11:45",
      type: "Root Canal",
      avatar: "/placeholder.svg?height=40&width=40",
      isMember: true,
      isHighlighted: false,
    },
  ],
  "2024-10-29": [],
  "2024-10-30": [],
  "2024-10-31": [],
}

// Helper function to format date
const formatDate = (dateString) => {
  const date = new Date(dateString)
  const day = date.getDate()
  const month = date.toLocaleString("default", { month: "short" })
  const monthLong = date.toLocaleString("default", { month: "long" })
  const year = date.getFullYear()
  const dayName = date.toLocaleString("default", { weekday: "short" })
  const dayNameLong = date.toLocaleString("default", { weekday: "long" })

  return {
    fullDate: `${dayNameLong}, ${day} ${month}`,
    shortDate: `${day} ${month}`,
    day,
    dayName,
    dayNameLong,
    month,
    monthLong,
    year,
  }
}

export function AppointmentsList() {
  const dates = Object.keys(appointmentsByDate)
  const [selectedDate, setSelectedDate] = useState(dates[0])
  const { monthLong, year } = formatDate(dates[0])

  const goToPreviousMonth = () => {
    // This would normally navigate to the previous month
    // For demo purposes, we're just showing the UI
  }

  const goToNextMonth = () => {
    // This would normally navigate to the next month
    // For demo purposes, we're just showing the UI
  }

  // Group appointments by date for display
  const groupedAppointments = Object.entries(appointmentsByDate)
    .filter(([date]) => {
      // Only show dates with appointments or the selected date
      return appointmentsByDate[date].length > 0 || date === selectedDate
    })
    .sort(([dateA], [dateB]) => {
      return new Date(dateA).getTime() - new Date(dateB).getTime()
    })

  return (
    <div className=" rounded-3xl p-2 shadow-sm text-black">

      {/* Calendar Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">
          {monthLong} {year}
        </h2>
        <div className="flex gap-2">
          <Button variant="outline" size="icon" className="h-8 w-8 rounded-full" onClick={goToPreviousMonth}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" className="h-8 w-8 rounded-full" onClick={goToNextMonth}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

     {/* Calendar Days */}
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {dates.map((date) => {
          const { day, dayName } = formatDate(date);
          const isSelected = date === selectedDate;

          return (
            <Button
              key={date}
              variant="ghost"
              className={`rounded-lg h-14 min-w-[40px] flex-grow ${
                isSelected ? "bg-[#1e3a8a] text-white hover:bg-[#152b67]" : "hover:bg-gray-100"
              }`}
              onClick={() => setSelectedDate(date)}
            >
              <div className="flex flex-col items-center">
                <span className="text-xs">{dayName}</span>
                <span className="text-lg font-bold">{day}</span>
              </div>
            </Button>
          );
        })}
      </div>


      {/* Appointments Section */}
      <h2 className="text-xl font-bold mb-4">Upcoming Appointments</h2>

      <div className="space-y-6">
        {groupedAppointments.map(([date, appointments]) => {
          const { dayNameLong, shortDate } = formatDate(date)
          const isToday = date === dates[0] // Simplified for demo

          return (
            <div key={date} className="space-y-2">
              <h3 className="text-gray-500 font-medium">
                {isToday ? `Today, ${shortDate}` : `${dayNameLong}, ${shortDate}`}
              </h3>

              {appointments.map((appointment) => (
                <Card
                  key={appointment.id}
                  className={`${
                    appointment.isHighlighted ? "bg-[#1e3a8a] text-white" : "bg-gray-50 hover:bg-gray-100"
                  } rounded-xl overflow-hidden `}
                >
                  <CardContent className="p-1 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="text-center text-sm font-medium w-10">{appointment.time}</div>
                      <Avatar className="h-10 w-10 rounded-full border-2 border-white">
                        <AvatarImage src={appointment.avatar} />
                        <AvatarFallback>{appointment.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-bold flex items-center gap-2">
                          {appointment.name}
                          {appointment.isMember && (
                            <Badge
                              className={`${
                                appointment.isHighlighted ? "bg-white text-[#1e3a8a]" : "bg-[#f87171] text-white"
                              } rounded-md font-normal text-xs`}
                            >
                              Member
                            </Badge>
                          )}
                        </div>
                        <div className={`text-sm ${appointment.isHighlighted ? "text-blue-100" : "text-gray-500"}`}>
                          {appointment.type}
                        </div>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className={`rounded-full ${appointment.isHighlighted ? "text-white hover:bg-blue-800" : ""}`}
                    >
                      <MoreVertical className="h-5 w-5" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )
        })}
      </div>
    </div>
  )
}


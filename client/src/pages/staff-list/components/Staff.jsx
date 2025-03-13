
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { MoreVertical } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"



const generalStaff= [
  {
    id: "1",
    name: "Emma Johnson",
    position: "Receptionist",
    phone: "555-123-4567",
    email: "emma@avicena.com",
    workingDays: ["M", "T", "W", "T", "F"],
    department: "Administration",
    type: "FULL-TIME",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "2",
    name: "Michael Chen",
    position: "Dental Assistant",
    phone: "555-234-5678",
    email: "michael@avicena.com",
    workingDays: ["M", "W", "F"],
    department: "Clinical Support",
    type: "PART-TIME",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "3",
    name: "Sarah Williams",
    position: "Office Manager",
    phone: "555-345-6789",
    email: "sarah@avicena.com",
    workingDays: ["M", "T", "W", "T", "F"],
    department: "Administration",
    type: "FULL-TIME",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "4",
    name: "David Rodriguez",
    position: "Dental Hygienist",
    phone: "555-456-7890",
    email: "david@avicena.com",
    workingDays: ["T", "T", "S"],
    department: "Clinical Support",
    type: "PART-TIME",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "5",
    name: "Lisa Thompson",
    position: "Billing Specialist",
    phone: "555-567-8901",
    email: "lisa@avicena.com",
    workingDays: ["M", "T", "W", "T", "F"],
    department: "Finance",
    type: "FULL-TIME",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export function Staff() {
  return (
    <div className="my-5">
      <div className="flex items-center mb-6 ">
        <div className="flex items-center gap-3">
          <div className="bg-purple-50 p-2 rounded-full">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-purple-600"
            >
              <path
                d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div>
            <span className="text-3xl font-semibold">45</span>
            <span className="text-gray-500 ml-2">Staff</span>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="text-left text-gray-500 border-b">
              <th className="p-4 w-10">
              <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
              </th>
              <th className="p-4 font-medium text-xs">NAME</th>
              <th className="p-4 font-medium text-xs">CONTACT</th>
              <th className="p-4 font-medium text-xs">WORKING DAYS</th>
              <th className="p-4 font-medium text-xs">DEPARTMENT</th>
              <th className="p-4 font-medium text-xs">TYPE</th>
              <th className="p-4 w-10"></th>
            </tr>
          </thead>
          <tbody>
            {generalStaff.map((staff) => (
              <tr key={staff.id} className="border-b">
                <td className="p-4">
                <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />                </td>
                <td className="p-1">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={staff.avatar} alt={staff.name} />
                      <AvatarFallback>{staff.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{staff.name}</div>
                      <div className="text-sm text-gray-500">{staff.position}</div>
                    </div>
                  </div>
                </td>
                <td className="p-1">
                  <div className="text-sm">
                    <div>{staff.phone}</div>
                    <div className="text-blue-600">{staff.email}</div>
                  </div>
                </td>
                <td className="p-1">
                  <div className="flex gap-1 flex-wrap">
                    {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
                      <div
                        key={index}
                        className={`w-6 h-6 rounded-full ${
                          staff.workingDays.includes(day) ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-400"
                        } flex items-center justify-center text-xs`}
                      >
                        {day}
                      </div>
                    ))}
                  </div>
                </td>
                <td className="p-1">
                  <div>{staff.department}</div>
                </td>
                <td className="p-1">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      staff.type === "FULL-TIME" ? "bg-green-100 text-green-600" : "bg-orange-100 text-orange-600"
                    }`}
                  >
                    {staff.type}
                  </span>
                </td>
                <td className="p-1">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>View Profile</DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}


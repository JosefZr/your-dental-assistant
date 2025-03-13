import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { MoreVertical } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"



const doctors = [
  {
    id: "1",
    name: "Darrel Stuwert",
    specialty: "Pediatric Dentistry",
    phone: "808 555-0111",
    email: "darrelstuwert@gmail.com",
    workingDays: ["S", "M", "T", "W", "T", "F", "S"],
    treatment: "Dentil service, Oral Disease service",
    treatmentCount: 2,
    type: "PART-TIME",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "2",
    name: "Ronald Richards",
    specialty: "Pediatric Dentistry",
    phone: "209 555-0104",
    email: "teukuwestnu@gmail.com",
    workingDays: ["S", "M", "T", "W", "T", "F", "S"],
    treatment: "Dentil service, Oral Disease service",
    treatmentCount: 2,
    type: "PART-TIME",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "3",
    name: "Drg Jerald O'Hara",
    specialty: "Pediatric Dentistry",
    phone: "302 555-0107",
    email: "cipeng@avicena.com",
    workingDays: ["S", "M", "T", "W", "T", "F", "S"],
    treatment: "Dentil service, Oral Disease service",
    treatmentCount: 2,
    type: "FULL-TIME",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "4",
    name: "Putri Larasati",
    specialty: "Pediatric Dentistry",
    phone: "629 555-0129",
    email: "larasati@avicena.com",
    workingDays: ["S", "M", "T", "W", "T", "F", "S"],
    treatment: "Dentil service, Oral Disease service",
    treatmentCount: 2,
    type: "FULL-TIME",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "5",
    name: "Drg Soap Mactavish",
    specialty: "Pediatric Dentistry",
    phone: "303 555-0105",
    email: "soap@avicena.com",
    workingDays: ["S", "M", "T", "W", "T", "F", "S"],
    treatment: "Dentil service, Oral Disease service",
    treatmentCount: 2,
    type: "PART-TIME",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "6",
    name: "Devon Lane",
    specialty: "Pediatric Dentistry",
    phone: "603 555-0123",
    email: "devon@avicena.com",
    workingDays: ["S", "M", "T", "W", "T", "F", "S"],
    treatment: "Dentil service, Oral Disease service",
    treatmentCount: 2,
    type: "FULL-TIME",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export function Doctors() {
    return (
        <div className="my-5">
        <div className="flex items-center mb-6">
            <div className="flex items-center gap-3">
            <div className="bg-blue-50 p-2 rounded-full">
                <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-blue-600"
                >
                <path
                    d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                    stroke="currentColor"
                    strokeWidth="2"
                />
                <path d="M12 8V16M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
            </div>
            <div>
                <span className="text-3xl font-semibold">120</span>
                <span className="text-gray-500 ml-2">Doctor</span>
            </div>
            </div>
        </div>

        <div className="overflow-x-auto">
            <table className="w-full border-collapse">
            <thead>
                <tr className="text-left text-gray-500 border-b">
                <th className="p-4 w-10">
                    <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />                </th>
                <th className="p-4 font-medium text-xs">NAME</th>
                <th className="p-4 font-medium text-xs">CONTACT</th>
                <th className="p-4 font-medium text-xs">WORKING DAYS</th>
                <th className="p-4 font-medium text-xs">ASSIGNED TREATMENT</th>
                <th className="p-4 font-medium text-xs">TYPE</th>
                <th className="p-4 w-10"></th>
                </tr>
            </thead>
            <tbody>
                {doctors.map((doctor) => (
                <tr key={doctor.id} className="border-b">
                    <td className="p-4">
                    <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    </td>
                    <td className="p-1">
                    <div className="flex items-center gap-3">
                        <Avatar>
                        <AvatarImage src={doctor.avatar} alt={doctor.name} />
                        <AvatarFallback>{doctor.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                        <div className="font-medium">{doctor.name}</div>
                        <div className="text-sm text-gray-500">{doctor.specialty}</div>
                        </div>
                    </div>
                    </td>
                    <td className="p-1">
                    <div className="text-sm">
                        <div>{doctor.phone}</div>
                        <div className="text-blue-600">{doctor.email}</div>
                    </div>
                    </td>
                    <td className="p-1">
                    <div className="flex gap-1 flex-wrap">
                        {doctor.workingDays.map((day, index) => (
                        <div
                            key={index}
                            className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs"
                        >
                            {day}
                        </div>
                        ))}
                    </div>
                    </td>
                    <td className="p-1">
                    <div>
                        {doctor.treatment}
                        <span className="text-gray-500"> • {doctor.treatmentCount}</span>
                    </div>
                    </td>
                    <td className="p-1">
                    <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                        doctor.type === "FULL-TIME" ? "bg-green-100 text-green-600" : "bg-orange-100 text-orange-600"
                        }`}
                    >
                        {doctor.type}
                    </span>
                    </td>
                    <td className="p-1">
                    <DropdownMenu >
                        <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                            <MoreVertical className="h-4 w-4" />
                        </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="bg-white">
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


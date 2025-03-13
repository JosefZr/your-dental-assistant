import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const complaints = [
  {
    id: 1,
    name: "Adegboyoga Precious",
    message: "The doctor that attended to me...",
    time: "09:04 AM",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    name: "Eze Chinedu",
    message: "The security guy is so disrespectful...",
    time: "3 days ago",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    name: "Jibike Alarape",
    message: "As a woman, you guys need to...",
    time: "5 days ago",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 4,
    name: "Adebanji Bolaji",
    message: "Your clinic is just too expensive...",
    time: "1 week ago",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 5,
    name: "Jide Kosoko",
    message: "How can a clinic treat someone...",
    time: "2 months",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export function CustomerComplaints() {
  return (
    <Card>
      <CardHeader className="pb-2 text-black">
        <CardTitle className="text-md font-medium">Customer Complaints</CardTitle>
      </CardHeader>
      <CardContent className="p-0 text-black">
        <div className="divide-y">
          {complaints.map((complaint) => (
            <div key={complaint.id} className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={complaint.avatar} />
                  <AvatarFallback>{complaint.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{complaint.name}</div>
                  <div className="text-xs text-gray-500 truncate max-w-[150px]">{complaint.message}</div>
                </div>
              </div>
              <div className="text-xs text-gray-500">{complaint.time}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}


import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MoreHorizontal } from "lucide-react"

const patients = [
  {
    id: 96,
    date: "23/10/2021",
    name: "Kiki Allman",
    membership: "Member",
    treatment: "Root Canal",
  },
  {
    id: 95,
    date: "23/10/2021",
    name: "Corbin Oakley",
    membership: "Not a member",
    treatment: "Consultation",
  },
  {
    id: 94,
    date: "23/10/2021",
    name: "Seren Lennon",
    membership: "Member",
    treatment: "Root Canal",
  },
]

export function PateintsDepts() {
  return (
    <Card className=" shadow-sm">
      <CardHeader className="pb-2 text-black">
        <CardTitle className="text-xl font-semibold text-gray-800">Latest Patient</CardTitle>
      </CardHeader>
      <CardContent className="p-0 text-black">
        <div className="overflow-x-auto">
          <table className="w-full ">
            <thead>
              <tr className="text-left border-b border-b-gray-500">
                <th className="font-normal p-4 text-sm text-gray-500">No</th>
                <th className="font-normal p-4 text-sm text-gray-500">Date</th>
                <th className="font-normal p-4 text-sm text-gray-500">Name</th>
                <th className="font-normal p-4 text-sm text-gray-500">payment status</th>
                <th className="font-normal p-4 text-sm text-gray-500">Treatment</th>
                <th className="font-normal p-4 text-sm text-gray-500"></th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient) => (
                <tr key={patient.id} className="border-b border-gray-400">
                  <td className="p-4 text-gray-800 font-medium">{patient.id}</td>
                  <td className="p-4 text-gray-500">{patient.date}</td>
                  <td className="p-4 text-gray-800 font-medium">{patient.name}</td>
                  <td className="p-4">
                    {patient.membership === "Member" ? (
                      <span className="bg-red-100 text-red-500 px-3 py-1 rounded-full text-xs font-medium">Member</span>
                    ) : (
                      <span className="text-gray-500 text-sm">Not a member</span>
                    )}
                  </td>
                  <td className="p-4 text-gray-500">{patient.treatment}</td>
                  <td className="p-4">
                    <Button variant="ghost" size="icon" className="text-gray-400">
                      <MoreHorizontal className="h-5 w-5" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}


import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function CreateStaffForm({ staffType, onSuccess }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    type: "FULL-TIME",
    specialty: staffType === "doctor" ? "Pediatric Dentistry" : "",
    position: staffType === "general" ? "Receptionist" : "",
    treatment: "dentil",
    department: "administration",
    workingDays: {
      sunday: false,
      monday: true,
      tuesday: true,
      wednesday: true,
      thursday: true,
      friday: true,
      saturday: false,
    },
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      workingDays: {
        ...prev.workingDays,
        [name]: checked,
      },
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Here you would typically send the data to your backend
    onSuccess()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Tabs defaultValue="personal" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="personal">Personal Information</TabsTrigger>
          <TabsTrigger value="work">Work Details</TabsTrigger>
          <TabsTrigger value="schedule">Schedule</TabsTrigger>
        </TabsList>

        <TabsContent value="personal" className="space-y-4 pt-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter full name"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email address"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="type">Employment Type</Label>
              <select
                id="type"
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <option value="FULL-TIME">FULL-TIME</option>
                <option value="PART-TIME">PART-TIME</option>
              </select>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="work" className="space-y-4 pt-4">
          {staffType === "doctor" ? (
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="specialty">Specialty</Label>
                <select
                  id="specialty"
                  name="specialty"
                  value={formData.specialty}
                  onChange={handleChange}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <option value="Pediatric Dentistry">Pediatric Dentistry</option>
                  <option value="Orthodontics">Orthodontics</option>
                  <option value="Oral Surgery">Oral Surgery</option>
                  <option value="Periodontics">Periodontics</option>
                  <option value="Endodontics">Endodontics</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="treatment">Assigned Treatment</Label>
                <select
                  id="treatment"
                  name="treatment"
                  value={formData.treatment}
                  onChange={handleChange}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <option value="dentil">Dentil service, Oral Disease service</option>
                  <option value="orthodontic">Orthodontic Treatment</option>
                  <option value="surgical">Surgical Procedures</option>
                </select>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="position">Position</Label>
                <select
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <option value="Receptionist">Receptionist</option>
                  <option value="Dental Assistant">Dental Assistant</option>
                  <option value="Office Manager">Office Manager</option>
                  <option value="Dental Hygienist">Dental Hygienist</option>
                  <option value="Billing Specialist">Billing Specialist</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="department">Department</Label>
                <select
                  id="department"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <option value="administration">Administration</option>
                  <option value="clinical">Clinical Support</option>
                  <option value="finance">Finance</option>
                </select>
              </div>
            </div>
          )}
        </TabsContent>

        <TabsContent value="schedule" className="space-y-4 pt-4">
          <div className="space-y-4">
            <Label>Working Days</Label>
            <div className="flex flex-wrap gap-4">
              {[
                { id: "sunday", label: "Sunday" },
                { id: "monday", label: "Monday" },
                { id: "tuesday", label: "Tuesday" },
                { id: "wednesday", label: "Wednesday" },
                { id: "thursday", label: "Thursday" },
                { id: "friday", label: "Friday" },
                { id: "saturday", label: "Saturday" },
              ].map((day) => (
                <div key={day.id} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id={day.id}
                    name={day.id}
                    checked={formData.workingDays[day.id ]}
                    onChange={handleCheckboxChange}
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <Label htmlFor={day.id}>{day.label}</Label>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <div className="flex justify-end space-x-2">
        <Button variant="outline" type="button" onClick={onSuccess}>
          Cancel
        </Button>
        <Button className="bg-my-black hover:bg-my-dark-blue" type="submit">Create {staffType === "doctor" ? "Doctor" : "Staff Member"}</Button>
      </div>
    </form>
  )
}


import { useContext, useState } from "react"
import { Button } from "@/components/ui/button"
import { Filter, Plus } from "lucide-react"
import { Staff } from "./components/staff"
import { Doctors } from "./components/doctors"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { CreateStaffForm } from "./components/createStaffForm"
import { MainContext } from "@/context/MainContext"
const menuItems = [
  {
    label: "doctors",
    value: "doctors",
    component: (props) => <Doctors {...props} />,
  },
  {
    label: "staff",
    value: "staff",
    component: (props) => <Staff {...props} />,
  },
]
export default function StaffList() {
    const { isSidebarOpen } = useContext(MainContext)
    const [activeTab, setActiveTab] = useState("doctors")
    const [isCreateStaffOpen, setIsCreateStaffOpen] = useState(false)

    return (
      <>
      <div className="h-[130vh]  bg-white">
        <main className={`p-1  ${isSidebarOpen ? "md:ml-44" : "ml-16"} transition-all duration-300`}>
          <div className="flex justify-between items-center p-4 border-b max-sm:flex-col-reverse max-sm:gap-5">
            <div className="flex space-x-8">
              <button
                onClick={() => setActiveTab("doctors")} // Match menuItems
                className={` px-1 font-medium text-sm cursor-pointer ${
                  activeTab === "doctors" ? "text-blue-600 " : "text-gray-500"
                }`}
              >
                Doctor Staff
              </button>
              <button
                onClick={() => setActiveTab("staff")} // Match menuItems
                className={` px-1 font-medium text-sm cursor-pointer ${
                  activeTab === "staff" ? "text-blue-600 " : "text-gray-500"
                }`}
              >
                General Staff
              </button>
            </div>
            <div className="flex items-center space-x-6">
              <Button className="text-sm cursor-pointer shadow text-black">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
              <Button onClick={() => setIsCreateStaffOpen(true)}  className="bg-blue-600 hover:bg-blue-700 cursor-pointer text-white  shadow">
                <Plus className="h-4 w-4 mr-2" />
                Add {activeTab === "doctor" ? "Doctor" : "Staff"}
              </Button>
            </div>
          </div>
    
          {/* Render the correct component */}
          <div className="flex-1 overflow-hidden">
            {menuItems.find((menuItem) => menuItem.value === activeTab)?.component({})}
          </div>
        </main>
      </div>
        <Dialog className="" open={isCreateStaffOpen} onOpenChange={setIsCreateStaffOpen}>
        <DialogContent className="max-w-3xl min-h-[400px]">
          <DialogHeader>
            <DialogTitle>Add New {activeTab === "doctor" ? "Doctor" : "Staff Member"}</DialogTitle>
          </DialogHeader>
          <CreateStaffForm staffType={activeTab} onSuccess={() => setIsCreateStaffOpen(false)} />
        </DialogContent>
      </Dialog>
      </>
    );
}

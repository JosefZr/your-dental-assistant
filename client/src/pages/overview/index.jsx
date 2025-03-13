import { useContext } from "react"
import Welcome from "./components/Welcome"
import { StatsCards } from "./components/stats-cards"
import { AppointmentsList } from "./components/AppointmentsList"
import { PateintsDepts } from "./components/PateintsDepts"
import Why from "./components/Why"
import { MainContext } from "@/context/MainContext"

export default function Overview() {
  const { isSidebarOpen } = useContext(MainContext)

  return (
    <div className="h-screen bg-white">
      <main className={`p-1 bg-slate-200 ${isSidebarOpen ? "md:ml-44" : "ml-16"} transition-all duration-300`}>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 sm:gap-3">
          {/* Left section - takes 2/3 of the space on medium screens and up */}
          <div className="md:col-span-3 space-y-4 sm:space-y-6">
            <Welcome />
            <StatsCards/>
            <Why />
            {/* <RevenueChart /> */}
            <PateintsDepts />
          </div>

          {/* Right section - takes 1/3 of the space on medium screens and up */}
          <div className="gap-4 md:col-span-2 ">
          <div className=" p-3 rounded-lg shadow flex flex-col sm:flex-row gap-1 text-white">
            <button className="w-full h-8 bg-[#1e4e4e] hover:bg-[#163a3a] rounded-md">
              <span className="mr-2 ">Make an appointment</span>
            </button>
            <button className="w-full h-8 bg-[#1e4e4e] hover:bg-[#163a3a] rounded-md">
              <span className="mr-2">Add patient</span>
            </button>
          </div>
            <AppointmentsList />
            {/* <CustomerComplaints /> */}
          </div>
        </div>
      </main>
    </div>
  )
}


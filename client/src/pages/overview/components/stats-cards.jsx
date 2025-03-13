import { DollarSign, SmileIcon as Tooth, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function StatsCards() {
    return (
        <div className="grid gap-4 md:grid-cols-2">
        {/* <Card className="bg-[#1e4e4e] text-white overflow-hidden relative">
            <CardContent className="p-6">
            <div className="flex items-center justify-between">
                <div>
                <p className="text-sm font-medium">Todays Patients</p>
                <h3 className="text-2xl font-bold mt-1">25</h3>
                </div>
                <div className="bg-[#2a6363] p-3 rounded-full">
                <DollarSign className="h-6 w-6" />
                </div>
            </div>
            <div className="absolute bottom-0 right-0 opacity-10">
                <DollarSign className="h-24 w-24" />
            </div>
            </CardContent>
        </Card> */}

        <Card style={{position:"relative"}} className="bg-[var(--today)] h-[150px] text-white overflow-hidden ">
            <CardContent className="p-6">
            <div className="flex items-center justify-between">
                <div>
                <p className="text-sm font-medium">Total Patients</p>
                <h3 className="text-2xl font-bold mt-1">368</h3>
                </div>
                <div className="bg-[#8d3e7e] p-3 rounded-full">
                <Tooth className="h-6 w-6" />
                </div>
            </div>
            <div className="absolute bottom-0 right-0 opacity-10">
                <Tooth className="h-24 w-24" />
            </div>
            </CardContent>
        </Card>

        <Card style={{position:"relative"}} className="bg-[var(--total)] h-[150px] text-white overflow-hidden">
            <CardContent className="p-6">
            <div className="flex items-center justify-between">
                <div>
                <p className="text-sm font-medium">Total Doctors</p>
                <h3 className="text-2xl font-bold mt-1">26</h3>
                </div>
                <div className="bg-[#3e5c8d] p-3 rounded-full">
                <Users className="h-6 w-6" />
                </div>
            </div>
            <div className="absolute bottom-0 right-0 opacity-10">
                <Users className="h-24 w-24" />
            </div>
            </CardContent>
        </Card>
        </div>
    )
}


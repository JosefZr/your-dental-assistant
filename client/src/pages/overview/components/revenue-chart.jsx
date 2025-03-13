import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from "recharts"

const data = [
  { name: "01 Feb", value: 80 },
  { name: "04 Feb", value: 90 },
  { name: "08 Feb", value: 30 },
  { name: "12 Feb", value: 75 },
  { name: "16 Feb", value: 60 },
  { name: "20 Feb", value: 40 },
  { name: "24 Feb", value: 100 },
  { name: "28 Feb", value: 80 },
]

export function RevenueChart() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2 text-black">
        <CardTitle className="text-md font-medium">Revenue Analytics</CardTitle>
        <div className="flex items-center gap-2">
          <div className="bg-[#1e4e4e] text-white px-3 py-1 rounded-md text-sm">₦6,368.94</div>
          <Select defaultValue="monthly">
            <SelectTrigger className="w-[120px] h-8">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="daily">Daily</SelectItem>
              <SelectItem value="weekly">Weekly</SelectItem>
              <SelectItem value="monthly">Monthly</SelectItem>
              <SelectItem value="yearly">Yearly</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{
                top: 5,
                right: 10,
                left: 10,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" tickLine={false} axisLine={false} tick={{ fontSize: 12 }} />
              <YAxis
                tickLine={false}
                axisLine={false}
                tick={{ fontSize: 12 }}
                domain={[0, 120]}
                ticks={[0, 20, 40, 60, 80, 100, 120]}
              />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#1e4e4e" strokeWidth={2} dot={false} activeDot={{ r: 6 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}


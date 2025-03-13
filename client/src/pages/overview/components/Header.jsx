import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Header() {
  return (
    <header className="border-b bg-white px-6 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="relative ml-4 hidden md:block">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input type="search" placeholder="Search..." className="w-64 pl-8 rounded-full bg-gray-100 border-none" />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="text-right mr-2 hidden md:block">
            <div className="font-medium">Dr Funmi Onifade</div>
            <div className="text-xs text-gray-500">Chief Medical Director</div>
          </div>
          <Avatar>
            <AvatarImage src="/placeholder.svg?height=40&width=40" />
            <AvatarFallback>FO</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  )
}


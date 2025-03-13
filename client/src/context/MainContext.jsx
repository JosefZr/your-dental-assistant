import { createContext, useState } from "react"

export  const MainContext = createContext();

export default function MainProvider({children}){
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    return (
    <MainContext.Provider 
        value={{
            isSidebarOpen, setIsSidebarOpen,
        }}
    >
        {children}
    </MainContext.Provider>
    )
}
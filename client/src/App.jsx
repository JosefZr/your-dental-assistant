// App.jsx
import { Routes, Route } from "react-router-dom";
import { SocketProvider } from "./socketContext";
import Overview from "./pages/overview";
import StaffList from "./pages/staff-list";



export default function App() {
  return (
    <SocketProvider>
      <Routes>
        {/* <Route element={<ProtectedRoutes/>}> */}
        <Route path="/" element={<Overview />} />
        <Route path="/staff-list" element={<StaffList />} />

        </Routes>
    </SocketProvider>
  );
}

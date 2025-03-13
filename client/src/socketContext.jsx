import { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";

const SocketContext = createContext();

export const useSocket = () => useContext(SocketContext);

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const socket = io(`${import.meta.env.VITE_SOCKET}`, {
	transports : ["websocket"],
	withCredentials: true,
      auth: {
        token: localStorage.getItem("token") || "",
      },
    });
    setSocket(socket);

    socket.on("connect", () => {
      console.log("Connected to socket");
    });

   socket.on("connect_error",(err) => {console.error("Connection Error : " , err.message)});

    return () => socket.close();
  }, []);

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};

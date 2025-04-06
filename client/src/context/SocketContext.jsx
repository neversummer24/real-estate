import { createContext, useContext, useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import { AuthContext } from "./AuthContext";

export const SocketContext = createContext();

export const SocketContextProvider = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  const [socket, setSocket] = useState(null);
  const socketRef = useRef(null); 

  useEffect(() => {
    // 如果没登录用户，不创建 socket
    if (!currentUser) return;

    // 如果已经有连接了，不再重复连接
    if (socketRef.current) return;

    const newSocket = io("http://localhost:3000", {
      withCredentials: true,
      reconnection: true,
      reconnectionAttempts: 5,    // 最多重连 5 次
      reconnectionDelay: 2000,    // 2s 起步
      reconnectionDelayMax: 10000 // 最长 10s
    });

    socketRef.current = newSocket;
    setSocket(newSocket);


    newSocket.emit("join", currentUser.id);

  
    return () => {
      newSocket.disconnect();
      socketRef.current = null;
      setSocket(null);
    };
  }, [currentUser]);

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
};


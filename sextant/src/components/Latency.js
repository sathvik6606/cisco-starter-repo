import { useEffect, useState } from "react";

function Latency() {
    const [latency, setLatency] = useState("Connecting...");

    useEffect(() => {
        const socket = new WebSocket("ws://localhost:55455");

        socket.onmessage = (event) => {
            const sentTime = Number(event.data);
            const currentTime = Date.now();
            setLatency(currentTime - sentTime);
        };

        socket.onerror = () => {
            setLatency("Connection failed");
        };

        return () => socket.close();
    }, []);

    return (
        <div>
            <p>{latency} ms</p>
        </div>
    );
}

export default Latency;
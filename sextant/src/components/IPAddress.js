import { useEffect, useState } from "react";

function IPAddress({ version }) {
    const [ip, setIp] = useState("Loading...");

    useEffect(() => {
        const url =
            version === "v6"
                ? "https://api64.ipify.org?format=json"
                : "https://api.ipify.org?format=json";

        fetch(url)
            .then((response) => response.json())
            .then((data) => setIp(data.ip))
            .catch(() => setIp("Unable to fetch IP"));
    }, [version]);

    return (
        <div>
            <h3>{version === "v6" ? "IPv6 Address" : "IPv4 Address"}</h3>
            <p>{ip}</p>
        </div>
    );
}

export default IPAddress;
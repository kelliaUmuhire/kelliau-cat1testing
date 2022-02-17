import axios from "axios";
import React, { useState } from "react";

export default function CheckToken() {
  const [token, setToken] = useState(0);
  const [data, setData] = useState(null);

  const datediff = (date) => {
    return Math.round((new Date() - new Date(date)) / (1000 * 60 * 60 * 24));
  };

  const checkToken = () => {
    axios
      .get(`http://localhost:3050/api/token/${token}`)
      .then((res) => setData(res.data.token))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h1>Check token</h1>
      <div>
        <input
          type="number"
          name="token"
          value={token}
          onClick={(e) => setToken(e.target.value)}
          placeholder="Enter token"
          maxLength={8}
          required={true}
        />
        <button onClick={checkToken}>Check Your Token</button>
      </div>
      {data && (
        <div>
          <div>Token: {data}</div>
          <div>You've {() => datediff(data.created_at)} days remaining</div>
        </div>
      )}
    </div>
  );
}

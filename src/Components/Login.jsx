// /* eslint-disable react-hooks/exhaustive-deps */

import React, { useState, useEffect } from "react";
import { PublicClientApplication } from "@azure/msal-browser";
import micIcon from "../Img/mic-icon.png";

const Login = () => {
  const [msalInstance, setMsalInstance] = useState(null);

  // authConfig.js
  const msalConfig = {
    auth: {
      clientId: "YOUR_CLIENT_ID",
      authority: "https://login.microsoftonline.com/YOUR_TENANT_ID", // Replace with your Azure AD tenant ID
      redirectUri: "http://localhost:3000", // Your app's redirect URI
    },
  };

  useEffect(() => {
    // Initialize MSAL instance
    const configInstance = new PublicClientApplication(msalConfig);
    setMsalInstance(configInstance);
  }, []);
  console.log("msalInstance==>", msalInstance);

  const login = async () => {
    try {
      const loginResponse = await msalInstance.loginPopup();
      console.log("loginResponse==>", loginResponse);
    } catch (error) {
      console.log("error==>", error);
    }
  };
  return (
    <div className="LoginPage">
      <div>
        <button className="LoginBtn" onClick={login}>
          <img src={micIcon} width="23" alt="micIcon" />
          <span className="mx-3 mt-3">Sign in With Microsoft</span>
        </button>
      </div>
    </div>
  );
};

export default Login;

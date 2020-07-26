import { Typography } from "@material-ui/core";
import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
      <div style={{ display: "flex", marginTop: 20 }}>
        <div style={{ flex: 1 }}>
          <div
            style={{
              margin: "0 auto",
              backgroundImage: "url(/logo.jpg)",
              width: 278,
              height: 200,
            }}
          ></div>
        </div>
        <div style={{ flex: 1, textAlign: "center" }}>
          <Typography variant="h5" style={{ marginBottom: 20 }}>
            Contact
          </Typography>
          <Typography variant="overline">
            <b>Address</b> Floor 4, Building 32, Feng Chao Workspace,
            <br></br> Daxing District, Beijing, PRC.
          </Typography>
          <br></br>
          <Typography variant="overline">
            <b>Email</b> info@gk-education.com
          </Typography>
        </div>
        <div style={{ flex: 1, textAlign: "center", marginBottom: 20 }}>
          <Typography variant="h5" style={{ marginBottom: 20 }}>
            Connect on Wechat
          </Typography>
          <img src="/qr.jpg" style={{ width: "40%", margin: "0 auto" }} />
        </div>
      </div>
      <div
        style={{
          width: "100%",
          backgroundColor: "lightgrey",
          padding: 5,
          textAlign: "center",
        }}
      >
        @{year} Great Kids Education
      </div>
    </>
  );
}
export default Footer;

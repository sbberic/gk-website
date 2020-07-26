import { Button, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { ContactUsContainer } from "./styles";

function ContactForm() {
  const [name, setName] = useState();
  const [message, setMessage] = useState();

  const [email, setEmail] = useState();

  return (
    <ContactUsContainer>
      <div style={{ width: 700, margin: "0 auto", textAlign: "center" }}>
        <Typography variant="h4">Contact us</Typography>
        <Typography variant="body1">
          Start building an unforgettable experiential learning experience for
          your students.
        </Typography>
        <Typography variant="body1">
          Let us know what you are looking for and we will get back to you!
        </Typography>
        <TextField
          color="secondary"
          margin="normal"
          variant="outlined"
          fullWidth
          label="Name"
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
        />
        <TextField
          color="secondary"
          margin="normal"
          variant="outlined"
          fullWidth
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
        <TextField
          color="secondary"
          margin="normal"
          variant="outlined"
          label="Message"
          value={message}
          onChange={(e) => setMessage(e.currentTarget.value)}
          multiline
          rows={6}
          fullWidth
        ></TextField>
        <Button variant="outlined" size="large">
          Send
        </Button>
      </div>
    </ContactUsContainer>
  );
}
export default ContactForm;

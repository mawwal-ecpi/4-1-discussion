import React, { useState } from "react";
import Message from "./components/UX/Message";

function App() {

  const [message, setMessage] = useState("");

  const displayMessage = (eMessage) => {
    setMessage(eMessage);
  }

  return (
    <div>
      <h1>Your Message: {message}</h1>
      <Message onAddMessage={displayMessage} />
    </div>
  );
}

export default App;

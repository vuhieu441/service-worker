import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from './firebase'
import { Button, Row, Col, Toast } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

//https://console.firebase.google.com/project/fir-cloud-messaging-90ae3/notification/compose?pli=1
function App() {
  const [body, setBody] = useState()
  const [title, setTitle] = useState()
  const [show, setShow] = useState(false);
  React.useEffect(() => {
    const msg = firebase.messaging();
    msg.requestPermission().then(() => {
      return msg.getToken();
    }).then((data) => {
      console.log("token", data)
    })
    navigator.serviceWorker.addEventListener("message", (message) => {
      // const data = message.data
      setShow(true)
      console.log(message.data["firebase-messaging-msg-data"])
      // console.log(data['firebase-messaging-msg-data'].notification)
      setBody(message.data["firebase-messaging-msg-data"].notification.body);
      setTitle(message.data["firebase-messaging-msg-data"].notification.title);
    }
    )
  }, [])

  return (
    <div className="App">
      <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide animation style={{
        position: 'absolute',
        bottom: 20,
        left: '20px',
        height: '150px',
      }}>
        <Toast.Header >
          <img
            src="holder.js/20x20?text=%20"
            className="rounded mr-2"
            alt=""
            style={{ display: 'flex', justifyContent: 'end' }}
          />
          <strong className="mr-auto" style={{ marginRight: '20px' }}>{title}</strong>
          <small>Now</small>
        </Toast.Header>
        <Toast.Body style={{ display: 'flex', flexWrap: 'wrap' }}>{body}</Toast.Body>
      </Toast>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button onClick={() => setShow(true)}>Show Toast</Button>
      </header>
    </div>
  );
}

export default App;

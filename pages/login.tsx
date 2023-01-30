import React, {useState} from 'react';
import {Alert, Button, Col, Container, Form, FormGroup, Input, Label, Row} from 'reactstrap';

import { FirebaseApp, initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, Auth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID
};

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [user, setUser] = useState(null);

  const onSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    setError('');
    if (email === '' || password === '') {
      setError('Please enter all fields');
    } else {

    }
  };
  let app: FirebaseApp;
  let auth: Auth;

  if (getApps().length === 0) {
    app = initializeApp(firebaseConfig);
    auth = getAuth(app);
  } else {
    app = getApp();
  }
  const provider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        console.log(credential);
        const token = credential.accessToken;
        const user = result.user;
        setUser(user);
        alert('You have successfully logged in');
      }).catch((error) => {
        console.log(error);
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
    }

return (
  <>
    <Container className="text-center" style={{ padding: '40px 0px' }}>
      <Row>
        <Col>
          <h2>Login</h2>
        </Col>
      </Row>
      <Row style={{ maxWidth: '400px', margin: 'auto' }}>
        <Col>
          <Form onSubmit={onSubmit}>
            {error && <Alert color="danger">{error}</Alert>}
            <FormGroup row>
              <Label for="loginEmail" sm={4}>Email</Label>
              <Col sm={8}>
                <Input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  name="email"
                  id="loginEmail"
                  placeholder="Email" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="loginPassword" sm={4}>Password</Label>
              <Col sm={8}>
                <Input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  id="loginPassword"
                  placeholder="Password" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col>
                <Button>Login</Button>
              </Col>
            </FormGroup>
          </Form>
            <div> 
              <p>
                Sign up with
              </p>
            </div>
            <FormGroup className='justify-content-center d-flex m-0'>
              <Col>
                <Button onClick={() => signInWithGoogle()}>Google <span className="fab fa-google"></span></Button>
              </Col>
              <Col>
                <Button>Facebook <span className="fab fa-facebook"></span></Button>
              </Col>
            </FormGroup>
        </Col>
      </Row>
    </Container>
  </>
  )
};

export default Login;

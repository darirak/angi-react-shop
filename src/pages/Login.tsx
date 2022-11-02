import { useState } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { Button, FormGroup, Input } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import AuthContainer from "../components/AuthContainer";

/* import { Route, Navigate, Outlet } from "react-router-dom";

  export default function PrivateRoute(props: any) {
  const currentUser = useAuth();
  return currentUser ? <Outlet /> : <Navigate to="/login" />;
} */

export function Login() {
  const auth = getAuth();
  const navigate = useNavigate();
  const [authing, setAuthing] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = () => {
    setAuthing(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        alert("This user has successfully signed in");
        navigate("/");
        window.location.reload();
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        alert(errorCode);
      });
  };

  const signInWithGoogle = async () => {
    setAuthing(true);

    signInWithPopup(auth, new GoogleAuthProvider())
      .then((response) => {
        console.log(response.user.uid);
        navigate("/");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
        setAuthing(false);
      });
  };

  return (
    <AuthContainer header="Login">
      <FormGroup>
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="Email Address"
          onChange={(event) => setEmail(event.target.value)}
          value={email}
        />
      </FormGroup>
      <FormGroup>
        <Input
          autoComplete="new-password"
          type="password"
          name="password"
          id="password"
          placeholder="Enter Password"
          onChange={(event) => setPassword(event.target.value)}
          value={password}
        />
      </FormGroup>
      <Button disabled={authing} color="success" block onClick={signIn}>
        Login
      </Button>
      <small>
        <p className="m-1 text-center">
          Don't have an account? <Link to="/register">Register here.</Link>
        </p>
        {/* <p className="m-1 text-center">
          <Link to="/forget">Forget your password?</Link>
        </p> */}
      </small>
      <hr className="bg-info m-3" />
      <Button
        block
        onClick={() => signInWithGoogle()}
        disabled={authing}
        style={{ backgroundColor: "#ea4335", borderColor: "#ea4335" }}
      >
        <i className="fab fa-google mr-2"></i> Sign in with Google
      </Button>
    </AuthContainer>
  );
}

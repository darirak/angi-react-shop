import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Button, FormGroup, Input } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import AuthContainer from "../components/AuthContainer";

// const RegisterPage: React.FunctionComponent<IPageProps> = props => {
//     const [registering, setRegistering] = useState<boolean>(false);
//     const [confirm, setConfirm] = useState<string>('');

export function Register() {
  const auth = getAuth();
  const navigate = useNavigate();
  const [registering, setRegistering] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = () => {
    setRegistering(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        alert("Successfully registered new user");
        navigate("/login");
        window.location.reload();
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        alert(errorCode);
        setRegistering(false);
      });
  };

  return (
    <AuthContainer header="Register">
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
      <Button
        disabled={registering}
        color="success"
        block
        onClick={() => signUp()}
      >
        Sign Up
      </Button>
      <small>
        <p className="m-1 text-center">
          Already have an account? <Link to="/login">Login.</Link>
        </p>
      </small>
    </AuthContainer>
  );
}

export default Register;

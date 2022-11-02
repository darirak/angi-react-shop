import { getAuth, signOut } from "firebase/auth";

export function Home() {
  const auth = getAuth();

  return (
    <div>
      <p>Home Page (Protected by Firebase!)</p>
      <h1>Home</h1>
      <br></br>
      <h4>Press on Store to move to the shop.</h4>
      <button
        onClick={() => {
          signOut(auth);
          setTimeout(() => {
            document.location.reload();
          }, 10);
        }}
      >
        Sign out of Firebase
      </button>
    </div>
  );
}

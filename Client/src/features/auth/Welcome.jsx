import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Welcome = () => {
  const date = new Date();
  const { username, isAdmin, isManager } = useAuth();
  const today = new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
    timeStyle: "long",
  }).format(date);

  function isManagerOrAdmin(isManager, isAdmin) {
    return isManager || isAdmin;
  }

  const content = (
    <section className="welcome">
      <p>{today}</p>

      <h1>Welcome {username}!</h1>

      <p>
        <Link to="/dash/notes">View techNotes</Link>
      </p>

      <p>
        <Link to="/dash/notes/new">Add New techNote</Link>
      </p>

      {isManager || isAdmin ? (
        <p>
          <Link to="/dash/users">View User Settings</Link>
        </p>
      ) : null}

      {isManagerOrAdmin(isManager, isAdmin) ? (
        <p>
          <Link to="/dash/users/new">Add New User</Link>
        </p>
      ) : null}
    </section>
  );

  return content;
};
export default Welcome;

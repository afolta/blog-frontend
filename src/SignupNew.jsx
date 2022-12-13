import axios from "axios";

export function SignupNew() {
  const handleSignupNew = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/users", params)
      .then((response) => {
        console.log(response);
        event.target.reset();
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <div id="signup-new">
      <h1>Signup</h1>
      <form onSubmit={handleSignupNew}>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" />
        <br></br>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" />
        <br></br>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" />
        <br></br>
        <label for="password_confirmation">Password Confirmation:</label>
        <input type="password" id="password_confirmation" name="password_confirmation" />
        <br></br>
        <input type="submit" value="Submit" formmethod="post" />
      </form>
    </div>
  );
}

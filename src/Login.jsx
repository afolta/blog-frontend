import axios from "axios";

export function Login() {
  const handleLogin = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/sessions", params)
      .then((response) => {
        console.log(response);
        event.target.reset();
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <div id="login-new">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" />
        <br></br>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" />
        <br></br>
        <input type="submit" value="Submit" formmethod="post" />
      </form>
    </div>
  );
}

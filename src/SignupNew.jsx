export function SignupNew() {
  return (
    <div id="signup-new">
      <h1>Signup</h1>
      <form action="http://localhost:3000/users" method="post">
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

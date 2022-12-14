export function PostNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreatePost(params);
    event.target.reset();
  };

  return (
    <div id="posts-new">
      <h1>New post</h1>
      <ul>
        {props.errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <label for="title">Title:</label>
        <input type="text" id="title" name="title" />
        <br></br>
        <label for="body">Body:</label>
        <br></br>
        <textarea type="textarea" id="body" name="body" size="30" rows="5" />
        <br></br>
        <label for="myfile">Select a file:</label>
        <input type="file" id="myfile" name="myfile"></input>
        <br></br>
        <input type="submit" value="Submit" formmethod="post" />
      </form>
    </div>
  );
}

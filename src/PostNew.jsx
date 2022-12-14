import axios from "axios";

export function PostNew() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    axios.post("http://localhost:3000/posts.json", params).then((response) => {
      console.log(response);
      event.target.reset();
    });
  };

  return (
    <div id="posts-new">
      <h1>New post</h1>
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

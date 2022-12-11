export function PostIndex(props) {
  console.log(props);
  return (
    <div id="posts-index">
      {props.posts.map((blog) => (
        <div key={blog.id} className="blogs">
          <h2>{blog.title}</h2>
          <p>Post: {blog.body}</p>
          <img src={blog.image} alt="" />
          <button onClick={props.onSelectPost}>More Info</button>
        </div>
      ))}
    </div>
  );
}

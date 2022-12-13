export function PostIndex(props) {
  console.log(props);
  return (
    <div id="posts-index">
      {props.posts.map((post) => (
        <div key={post.id} className="blogs">
          <h2>{post.title}</h2>
          <p>Post: {post.body}</p>
          <img src={post.image} alt="" />
          <button onClick={() => props.onSelectPost(post)}>More Info</button>
        </div>
      ))}
    </div>
  );
}

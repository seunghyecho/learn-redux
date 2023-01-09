const Sample = ({ loadingPost, loadingUsers, post, users }) => {
  return (
    <div>
      <section>
        <h1>POST</h1>
        {loadingPost && "loading..."}
        {!loadingPost && post && (
          <>
            <h3>{post.title}</h3>
            <h3>{post.body}</h3>
          </>
        )}
      </section>
      <section>
        <h1>USERS</h1>
        {loadingUsers && "loading..."}
        {!loadingUsers && users && (
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                {user.username} ({user.email})
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};
export default Sample;

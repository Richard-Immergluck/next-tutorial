function User({ user }) {
  return (
    <>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{user.username}</p>
    </>
  );
}

export default User
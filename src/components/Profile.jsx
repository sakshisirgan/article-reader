const Profile = () => {
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    joined: "January 2023",
  };

  return (
    <div>
      <h2>Profile</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Joined:</strong> {user.joined}</p>
    </div>
  );
};

export default Profile;

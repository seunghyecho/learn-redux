const Users = ({users}) => {
    if (!users) return null;
    return (
        <ul>
            {users.map(user => (
                <li key={user.id}><a href={`/users/${user.id}`}>{user.username}</a></li>
            ))}
        </ul>
    )
}
export default Users;
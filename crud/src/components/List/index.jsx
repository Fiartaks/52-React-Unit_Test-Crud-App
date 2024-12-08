const List = ({users}) => {
  return (
    <table className="table my-4 table-dark table-responsive table-striped table-hover">
        <thead>
            <tr>
                <th>isim</th>
                <th>Email</th>
                <th>Yas</th>
            </tr>
        </thead>
        <tbody data-testid='table-body'>
            {
                users.map(user => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.mail}</td>
                        <td>{user.age}</td>
                    </tr>
                ))
            }
        </tbody>
    </table>
  )
}
export default List
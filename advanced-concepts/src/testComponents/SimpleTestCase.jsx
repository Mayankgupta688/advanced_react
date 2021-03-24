export default function SimpleTestCase(props) {

    var userList = [{
        name: "Mayank",
        age: 20
    }, {
        name: "Mayank",
        age: 20
    }];

    return (
        <div>
            <h1>User Name is: {props.userName}</h1>
            {userList.map((emp) => {
                return <h3>User Name is: {emp.name}</h3>
            })}
        </div>
    )
}
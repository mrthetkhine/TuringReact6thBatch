import {Fragment} from "react";
function UserTableRow({user})
{
    return (
        <Fragment>
            <td>
                {user.name}
            </td>
            <td>
                {user.age}
            </td>
        </Fragment>

    );
}
export default function TableDemo()
{
    let data = [
        {
            name : "user1",
            age : 10,
        },
        {
            name : "user2",
            age : 11,
        },
    ]
    return (<div>
        <table className={"table table-stripped"}>
            <thead>
                <tr>
                    <th> Name</th>
                    <th> Age</th>
                </tr>
            </thead>
            <tbody>
            {
                data.map((user,index)=>
                    <tr key={index}>
                        <UserTableRow
                            user={user}/>
                    </tr>
                    )
            }
            </tbody>
        </table>
    </div>);
}
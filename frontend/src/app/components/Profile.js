
export default function Profile({isAdmin})
{
    /*
    if(isAdmin)
    {
        return (<div>
            Admin
        </div>);
    }
    else
    {
        return (<div>
            User
        </div>)
    }*/
    return (<div>
        {
            isAdmin? <div>Admin</div> : <div>User</div>
        }
    </div>);
}
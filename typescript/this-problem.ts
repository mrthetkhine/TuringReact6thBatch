type User = {
    id:number,
    admin:boolean,
    becomeAdmin:()=>void
}
const user:User = {
  id: 123,
 
  admin: false,
  becomeAdmin: function () {
    this.admin = true;
  },
};
console.log('User ',user);

interface DB {
    filterUsers(users:User[],filter: (user: User) => boolean): User[];
}
const db = [
    {
        id: 123,
        admin: false,
        becomeAdmin: function () {
        this.admin = true;
        }
    },
    {
        id: 123,
        admin: true,
        becomeAdmin: function () {
        this.admin = true;
        }
    },
];
let data: DB = {
    filterUsers : function(users: User[], filter: (user:User)=>boolean)
    {
        let result:User[] = []
        for(let i=0;i< users.length; i++)
        {
            if(filter(user))
            {
                result.push(user);
            }
        };
        return result;

    }
}
function isAdmin(user:User)
{
    return user.admin
}
let result = data.filterUsers(db,isAdmin);
console.log('Result ',result);
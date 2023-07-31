class StaticMember
{
    static count :number = 0;
    x = 10;
    constructor()
    {
        //StaticMember.count ++;
    }
    static{
        console.log('Static block 1');
        StaticMember.count ++;
    }
    static{
        console.log('Static block 2');
        StaticMember.count ++;
    }
    print()
    {
        console.log('Count ',StaticMember.count," x ",this.x);
    }
    static nonInstance()
    {
        console.log(StaticMember.count);
    }
}
let obj = new StaticMember();
let obj2 = new StaticMember();

obj.print();
obj2.print();
function Item(props) {
    return <div>
        <img src={"https://i.imgur.com/7vQD0fPs.jpg"}/><br/>
        <h2>{props.item}</h2>
    </div>;
}

export default function ItemList({items})
{
    const listItems = items.map((item,index)=>
                                <Item key={index}
                                      item={item}/>);
    return(<div>
       {/* {
            items.map((item,index)=>
                <div key={index}>
                    {item}
                </div>)
        }*/}
        {
            listItems
        }
    </div>);
}
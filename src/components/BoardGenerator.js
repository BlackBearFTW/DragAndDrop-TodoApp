import Board from "./Board";
import List from "./List";
import Card from "./Card";

function BoardGenerator({data}) {
    return (
        <Board name={data.name}>
            
            {data.lists.map((list) =>(
                // Generate List
                <List name={list.name}>

                    {list.cards.map(card => (
                        // Generate Card
                        <Card text={card} />
                    ))}

                </List>
            ))}

        </Board>
    )
}

export default BoardGenerator;


/*

{
name: "Board Name",
lists: [
    {
        name: "List Name",
        order: 1,
        cards: ["TEXT HERE"]
    }
]
}

 */
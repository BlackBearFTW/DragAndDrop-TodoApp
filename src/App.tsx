import './App.css';
import Board from "./components/Board";
import List from "./components/List";
import Card from "./components/Card";

function App() {

    const data = {
        name: "Board Name",
        lists: [
            {
                name: "List Name",
                order: 1,
                cards: ["TEXT HERE"]
            }
        ]
    }


    return (
        <div className="App">
            <Board name={data.name}>

                {data.lists.map((list) => (
                    // Generate List
                    <List name={list.name}>

                        {list.cards.map(card => (
                            // Generate Card
                            <Card text={card}/>
                        ))}

                    </List>
                ))}

            </Board>
        </div>
    );
}

export default App;

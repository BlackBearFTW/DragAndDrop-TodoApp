import './App.css';
import BoardGenerator from "./components/BoardGenerator";

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
            <BoardGenerator data={data} />
        </div>
    );
}

export default App;

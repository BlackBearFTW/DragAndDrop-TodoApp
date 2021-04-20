import './App.css';
import Board from "./components/Board";
import List from "./components/List";
import Card from "./components/Card";

function App() {
    return (
        <div className="App">
            <Board name="Hello World">
                <List name="Todo">
                    <Card/>
                </List>
            </Board>
        </div>
    );
}

export default App;

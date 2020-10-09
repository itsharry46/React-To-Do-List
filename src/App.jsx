import React, { useState } from "react";
import Todolist from "./Todolist";
import "./app.css";

const App = () => {

    const [inputList, setInputList] = useState("");
    const [items, setItems] = useState([]);

    const itemEvent = (event) => {
        setInputList(event.target.value);
    };

    const listofitem = () => {
        setItems((oldItems) => {
            return [...oldItems, inputList];
        })
    };

    const deleteItem = (id) => {
        console.log("deleted");

        setItems((oldItems) => {
            return oldItems.filter((arrElem, index) => {
                return index !== id;
            });
        });
    };

    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1>To Do List</h1>
                    <br />
                    <input type="text" placeholder="Add Items" onChange={itemEvent} />
                    <button onClick={listofitem}> + </button>
                    <div className="scroll-trans">
                        <ol>
                            {/* <li>{inputList}</li> */}
                            {items.map((itemval, index) => {
                                return <Todolist
                                    key={index}
                                    id={index}
                                    text={itemval}
                                    onSelect={deleteItem}
                                />;
                            })}
                        </ol>
                    </div>
                </div>
            </div>
        </>
    );
};

export default App;

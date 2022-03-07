import { useContext, useReducer, useState } from "react";
import ForumContext from "./ForumContext";
const ForumForm = (props) => {
    let [Forum, setForums] = useState("")
    let [status, setStatus] = useState("user1")
    let { dispatch } = useContext(ForumContext)
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const addForum = () => {
        document.getElementById("inputID").value.length > 0 ? dispatch({ type: 'add', Forum: Forum, status: status, time: props.time, date:props.date, month:props.month, year:props.year }) : alert("Give Forum")
    }
    const clearAllForums = () => {
        dispatch({ type: 'delAll' });
    }
    return (
        <div className="form">
            <form onSubmit={handleSubmit} >
                <textarea
                    id="inputID"
                    name="Forum"
                    className="input"
                    placeholder="Enter Comment"
                    onInput={(e) => {
                        setForums(e.target.value)
                    }}
                ></textarea>
                <select onChange={(e) => {
                    setStatus(e.target.value)
                }} >
                    <option value='user1' >User 1</option>
                    <option value='user2' >User 2</option>
                    <option value='user3' >User 3</option>
                </select>
                <br />
                <button onClick={addForum} >Add Forum</button>
                <button onClick={clearAllForums}  >Clear All Forums</button>
            </form>
            <div>{ForumList()}</div>
        </div>
    )
}

const ForumList = () => {
    let valuesAll = useContext(ForumContext)
    console.log(valuesAll)
    if(valuesAll !==  undefined){
        return (
            <div>
                {
                    valuesAll.state.map((val, index) => {
                      if(val.Forum !== undefined)  {
                            return (
                                <div className="list" style={{visibility: "visible"}}>
                                    <h2 className={val.status}>{val.status}</h2>
                                    <h3  >{val.Forum}</h3>
                                    <p>Date: {val.date} / {val.month} / {val.year}</p>
                                    <button onClick={() => {
                                        if(window.confirm("Do you want to delete?") == true){
                                            valuesAll.dispatch({type:'deleteThisForum', indexToDel:index});

                                        }
                                        }} >Delete</button>
                                </div>
                            )
                        }

                    })
                }
            </div>

        )
    }
    
}

export default ForumForm;
const ReducerForum = (state, action) => {
    if (action.type == "add") {
        let ForumObject = {
            Forum: action.Forum,
            status: action.status,
            time: action.time,
        }
        let bj = JSON.stringify(ForumObject);
        localStorage.setItem("Forum" , bj);
        let Forum = {     
            Forum: action.Forum,
            status: action.status,
            time: action.time,
            date: action.date,
            month: action.month,
            year: action.year
        }
        let newForums = [...state, Forum];
        return newForums
    }
    if (action.type == "deleteThisForum") {
        let newForums = state.filter(function (val, index) {
            if (action.indexToDel == index) {           
                return false
            }
            else{
                return true
            }
        }) 
        localStorage.setItem("Forum", JSON.stringify(newForums));
        return newForums
    }
    if (action.type == "delAll") {
        let modifiedState = state.filter((val, ind) => {
            if (new Date().getFullYear() - action.year >= 1) {
                return true;
            } else if (new Date().getMonth() - action.month>= 1) {
                return true;
            } else if (new Date().getDay() - action.date >= 1) {
                return true;
            } else if (new Date().getHours() - new Date(val.time).getHours() >= 1) {
                return true;
            } else if (new Date().getMinutes() - new Date(val.time).getMinutes() >5) {
                return true;
            } else {
                return false;
            }
        });
        localStorage.setItem("Forum", JSON.stringify(modifiedState));
        return modifiedState;
    }
}
export default ReducerForum;
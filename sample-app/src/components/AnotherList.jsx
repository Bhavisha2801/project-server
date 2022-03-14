import React from "react";
import { ListRow } from "./listRow.jsx";

class AnotherList extends React.Component{
    render(){
        return (
            <ol>
                <ListRow />
                <ListRow />
                <ListRow />
            </ol>
        )
    }
}


export default AnotherList;
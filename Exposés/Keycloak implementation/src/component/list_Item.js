import React  from'react';
//import {library} from'@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from'@fortawesome/react-fontawesome';
import {faTrash} from'@fortawesome/free-solid-svg-icons';
import FlipMove from 'react-flip-move';
function List (props){
  const list_items=props.list.slice();    
  //const key1=list_items.key;

    let Array= list_items.map(list_items=>{
      
    return(
    <div  key={list_items.key} className="element">
      
      <p>
      <input type="text" value={list_items.text} onChange={(event)=>props.onChange(event, list_items.key)} className="iput"></input>
      <span ><FontAwesomeIcon className="delete" icon={faTrash} onClick={()=>props.onAction(list_items.key)}/></span>
      </p>
      </div>)})
      
    return(
           
            <FlipMove duration={300} easing="ease-out">
            {Array}
            </FlipMove>
             
          
        )
}
export default List;
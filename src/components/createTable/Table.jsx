import { useState } from 'react';

import firebase from '../firebase';

import './Table.css'

function Table() {

 let [yjArray] = useState([
  {
   column: [{ name: "c-1", type: 'c-2' }, { name: "c-2", type: 'c-2' }],
   row: [["a", "b", "B"], ["a", "b", "B"]]
  },
  {
   column: [{ name: "c-1", type: 'c-2' }, { name: "c-2", type: 'c-2' }],
   row: [["a", "b", "B"], ["a", "b", "B"]]
  },
 ])

 let f = async () => {
  await firebase.firestore().collection("users").add({ a: 'ss' });
  // console.log(docRef);
 };
 f();

 return (
  <>
   <div className="TableDivContainer">
    {yjArray.map((yjArray) => {
     return (<table>
      <tr>
       {yjArray.column.map((e) => {
        return <th>{e.name} <h6>{e.type}</h6></th>
       })}
      </tr>
      {yjArray.row.map((e) => {
       return <tr>
        {e.map((e) => {
         return <td>{e}</td>
        })}
       </tr>
      })}
     </table>)
    })}
   </div>
  </>)
}

export default Table;
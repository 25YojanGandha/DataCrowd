import React, { createRef, useContext } from 'react';
import { GlobalData } from '../../App';
import './TableInput.css'
function TableInput() {
 let gData = useContext(GlobalData)
 let inputRowElement = createRef()
 let inputColumnElement = createRef()
 let inputDataColumnContainerElement = createRef()
 
 let columDataArr = new Array(Number(gData.column))
 let rowDataArr = new Array(Number(gData.row))

 for (let i = 0; i < rowDataArr.length; i++) {
  rowDataArr[i] = new Array(Number(gData.column));
  for (let j = 0; j <rowDataArr[i].length; j++) {
   rowDataArr[i][j] = ''
  }

 }

 let createTableRowdata = () => {
  // let Row = inputRowElement.current.value
  // let Column = inputColumnElement.current.value
  // let columnContainer = inputDataColumnContainerElement.current

  if ((!inputRowElement.current.value !== 0 && !inputRowElement.current.value) && (!inputColumnElement.current.value !== 0 && !inputColumnElement.current.value)) {
   alert('Enter Proper Row & Column Data')
   return
  } else if (!inputRowElement.current.value !== 0 && !inputRowElement.current.value) {
   alert('Enter Proper Row Data')
   return
  } else if (!inputColumnElement.current.value !== 0 && !inputColumnElement.current.value) {
   alert('Enter Proper Column Data')
   return
  }
  console.log(columDataArr[0]);
  for (let i = 0; i < columDataArr.length; i++) {
   if (columDataArr[i]) {
    if (columDataArr[i]['heading'] === undefined || columDataArr[i]['type'] === undefined) {
     alert("Enter Proper COLUMN & TYPE Data")
     return
    }
   } else {
    alert("Enter Proper COLUMN & TYPE Data")
    return
   }
  }


  console.log(columDataArr);
  console.log(rowDataArr);

  gData.setIsTableComponent(false)
  gData.setRow(0)
  gData.setColumn(0)

 }

 let inputColBox = () => {
  let dummyArr = []
  for (let i = 0; i < gData.column; i++) {
   dummyArr.push(i)
  }
  return <>
   <div className='columnInputData' ref={inputDataColumnContainerElement}>
    <div className='inputMainContainerLabel'>Column Details</div>
    {dummyArr.map((_, i) => {
     return (
      <div className='columnInnerdata'>
       <div className='tableInputContainer'>
        Column {i + 1} <input onKeyUp={(e) => {
         columDataArr[i] = { ...columDataArr[i], heading: e.currentTarget.value }
        }} placeholder='Enter Value' type="text" />
       </div>
       <div className='tableInputContainer tableInputSelectBox'>
        <select name="cars" id="cars" onChange={(e) => {
         if (e.currentTarget.value !== 'Select Type') {
          columDataArr[i] = { ...columDataArr[i], type: e.currentTarget.value }
         }
        }}>
         <option value={null}>Select Type</option>
         <option value="Number">Number</option>
         <option value="String">String</option>
         <option value="Boolean">Boolean</option>
         <option value="Email">Email</option>
         <option value="Datatime">Datatime</option>
        </select>
       </div>

      </div>
     )
    })}
   </div>
  </>
 }
 return (<>
  <div className="tableInput_body">
   <div className='tableInput_sectionContainer'>
    <div className='tableInput_innerPart'>
     <div className='tableInput_r_c_inputBox'>
      <div className='tableInputContainer'>
       Number of Rows <input placeholder='Enter Number' ref={inputRowElement} type="text" onKeyUp={(e) => {
        if (e.target.value !== '') {
         gData.setRow(e.target.value)
        } else {
         gData.setRow(0)
        }
       }} onInput={(e) => {
        e.target.value = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');
       }} />
      </div>
      <div className='tableInputContainer'>
       Number of column <input placeholder='Enter Number' ref={inputColumnElement} type="text" onKeyUp={(e) => {
        if (e.target.value !== '') {
         gData.setColumn(e.target.value)
        } else {
         gData.setColumn(0)
        }
       }} onInput={(e) => {
        e.target.value = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');
       }} />
      </div>
     </div>
     <div className='tableInput_rowColumData'>
      {gData.row !== 0 || gData.column !== 0 ? <>
       {gData.column !== 0 ? inputColBox() : ''}
      </> : <div className='tableInput_rowColumData_innertext'>No Colum & Row Data</div>}
     </div>
    </div>

    <div className='tableInput_saveCancelBox'>
     <div className='tableBtn btnRedColor' onClick={() => {
      gData.setIsTableComponent(false)
      gData.setRow(0)
      gData.setColumn(0)
     }}>Cancel</div>
     <div className='tableBtn ' onClick={() => {
      createTableRowdata();

     }}>Done</div>
    </div>
   </div>
  </div>
 </>)
}

export default TableInput
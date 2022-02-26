import React,{ useContext } from 'react';
import { GlobalData } from '../../App';
import './TableInput.css'
function TableInput() {
 let gData = useContext(GlobalData)
 let inputColBox = () => {
  let dummyArr = []
  for (let i = 0; i < gData.column; i++) {
   dummyArr.push(i)
  }


  return <>
   <div className='columnInputData'>
    <div className='inputMainContainerLabel'>Column Details</div>
    {dummyArr.map((_,i) => {
     return (<div className='columnInnerdata'>
      <div className='tableInputContainer'>
       Column {i+1} <input placeholder='Enter Value' type="text" />
      </div>
      <div className='tableInputContainer tableInputSelectBox'>
       <select name="cars" id="cars">
        <option value={null}>Select Type</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
       </select>
      </div>

     </div>)
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
       Number of Rows <input placeholder='Enter Number'  type="text" onKeyUp={(e) => {
        if (e.target.value !== '') {
         console.log("a");
         gData.setRow(e.target.value)
        } else {
         gData.setRow(0)
        }
       }} onInput={(e) => {
        e.target.value = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');
       }} />
      </div>
      <div className='tableInputContainer'>
       Number of column <input placeholder='Enter Number' type="text" onKeyUp={(e) => {
        if (e.target.value !== ''){
         gData.setColumn(e.target.value)
        } else {
         gData.setColumn(0)
        }
       }}  onInput={(e) => {
        e.target.value = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');
       }} />
      </div>
     </div>
     <div className='tableInput_rowColumData'>
      {gData.row !== 0 || gData.column !== 0 ? <>
       {gData.column !== 0 ? inputColBox():''}
      </> : 'No Colum And Row Data'}
     </div>
    </div>

    <div className='tableInput_saveCancelBox'>
     <div className='tableBtn btnRedColor' onClick={() => {
      gData.setIsTableComponent(false)
     }}>Cancel</div>
     <div className='tableBtn ' onClick={() => {
      gData.setIsTableComponent(false)
     }}>Done</div>
    </div>
   </div>
  </div>
 </>)
}

export default TableInput
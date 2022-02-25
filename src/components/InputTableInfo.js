import { useContext } from 'react';
import { GlobalData } from '../App';

function InputTableInfo() {
    let gData = useContext(GlobalData);
    let dataType = useState(['String','Number','Boolean','Email','DateTime']);

    let handleRow = (e)=>{
        let rowNumber=e.currentTarget.value;
        ++rowNumber;
        gData.setRow(rowNumber);
    }

    let handleColumn = (e)=>{
        let columnNumber=e.currentTarget.value;
        ++columnNumber;
        gData.setColumn(columnNumber);
    }

    return(<>
        <input className='row-input' onKeyUp={(e)=>{
            if(e.key==='Enter'){
                handleRow(e);
            }
        }}/>

        <input className='column-input' onKeyUp={(e)=>{
            if(e.key==='Enter'){
                handleColumn(e);
            }
        }}/>

        {gData.columnNumber!=0?<select>
          
        </select>:<></>}
    </>);
}

export default InputTableInfo;
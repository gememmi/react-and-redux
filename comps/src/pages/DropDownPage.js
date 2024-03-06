import { useState, useEffect} from 'react';
import DropDown from './components/DropDown';

function DropDownPage() {
const [selection, setSelection] = useState( null );

const handleSelect = (option) => {
    setSelection(option);
};
const options = [
    {label: 'red', value: 'red'},
    {label: 'blue', value: 'blue'},
    {label: 'green', value: 'green'},
]
    
    return(
        <div className="flex">
            <DropDown options={ options } onChange={ handleSelect } value={selection}/>
        </div>
    );
    

};



export default DropDownPage;
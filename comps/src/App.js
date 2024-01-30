import { useState } from 'react';
import AccordionPage from './pages/AccordionPage';
import DropDown from './components/DropDown';

function App() {
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
        <DropDown options={ options } handleSelect={ handleSelect } selection={selection}/>
    );
    

};



export default App;
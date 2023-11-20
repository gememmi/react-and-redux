
import Accordion from './components/Accordion';

function App() {
    const items = [
        {
            id:"a",
            label: 'heeeyyy',
            constent: 'what is up'
        },
        {
            id:"b",
            label: 'heeeyyy',
            constent: 'what is up'
        },
        {
            id:"c",
            label: 'heeeyyy',
            constent: 'what is up'
        },
    ]

    
    return (
        <div>
        <Accordion items={items} />
        </div>
        )
    
}



export default App;
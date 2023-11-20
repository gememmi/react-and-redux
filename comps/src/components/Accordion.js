import { useState }from 'react';

function Accordion({items}) {
    const [expandedIndex, setExpandedIndex] = useState(0);
    
    const renderedItems  = items.map((item, index) => {
        const isExpanded = index === expandedIndex;

        console.log(isExpanded);
        if (index === expandedIndex) {
            console.log('Expanded!');
        }
        else {
            console.log('collapsed!');
        };
        return (
            <div>
                <div>{item.id}</div>
                <div>{item.label}</div>
                <div>{item.content}</div>
            </div>
        );
       
    });
    return <div>{renderedItems}</div>
    

};

export default Accordion;
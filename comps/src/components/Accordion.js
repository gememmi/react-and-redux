import { useState }from 'react';
import { GoChevronDown } from "react-icons/go";
import { GoChevronLeft } from "react-icons/go";

function Accordion({items}) {
    const [expandedIndex, setExpandedIndex] = useState(-1);
    
    const handleClick = (nextIndex) =>{
        if (expandedIndex === nextIndex) {
            setExpandedIndex(-1)
        }
        else {
            setExpandedIndex(nextIndex);
        }
        }
   
   
    const renderedItems = items.map((item, index) => {
        const isExpanded = index === expandedIndex;

        const icon = <span>
            {isExpanded ? <GoChevronDown /> : <GoChevronLeft /> }
        </span>
    
    return (
        <div key={item.id}>
            <div 
            className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer" 
            onClick={() => handleClick(index)}
            >                
                {item.label}
                {icon}
                </div>
            {isExpanded && <div className="border-b p-5">{item.content}</div>}
        </div>
    );
   })

    return <div className="border-x border-t rounded">{renderedItems}</div>
    

};

export default Accordion;

//if isExpanded is true, then the items content will appear. But if it is false, React will not render anything. 

//THIS EXPLAINED THE CONVALUTED SOLUTION THAT WAS FIRST SHOWN
// Explain what is happening here:
//Our accordian menu will conditionally render an element depneding on if it is expanded or not.
//renderedItems maps over our fetched data, or in this case our array in App.js, and takes in each item object and its id. 
//If that id matches the current state, expandedIndex, then our variable, isExpanded, will come back as true, if not it will
//come back as false. The value of our varialbe content will be determined by this since the first truthy value will be returned. If isExpanded is true,
//then the content that is displayed will be that item, if it is false then that item will just be the id and the label, not the items content. 
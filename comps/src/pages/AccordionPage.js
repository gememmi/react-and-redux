import Accordion from "../components/Accordion"


function AccordionPage() {

    const items = [
        {
            id:"a",
            label: 'heeeyyy',
            content: 'what is up'
        },
        {
            id:"b",
            label: 'heeeyyy',
            content: 'what is up'
        },
        {
            id:"c",
            label: 'heeeyyy',
            content: 'what is up'
        },
    ]


    return (
        <div>
        <Accordion item={ items } />
        </div>
        );
};

export default AccordionPage;



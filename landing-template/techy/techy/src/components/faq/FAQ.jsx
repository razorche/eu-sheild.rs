import React, {Fragment} from 'react'

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';



const faqContent = [
    {
        title: 'What is included in IT support?',
        desc: 'Proactively initiate corporate vortals via bricks-and clicks relationsh. Dynamically envisioneer cutting-edge paradigms via client-centered relationships. Globally repurpobackward-compatible.',
        expanded: 'a',
    },
    {
        title: 'WHAT IT solutions companies do?',
        desc: 'Proactively initiate corporate vortals via bricks-and clicks relationsh. Dynamically envisioneer cutting-edge paradigms via client-centered relationships. Globally repurpobackward-compatible.',
        expanded: 'b',
    },
    {
        title: 'What are examples of IT solutions?',
        desc: 'Proactively initiate corporate vortals via bricks-and clicks relationsh. Dynamically envisioneer cutting-edge paradigms via client-centered relationships. Globally repurpobackward-compatible.',
        expanded: 'c',
    },
    {
        title: 'What does IT stand for in IT department?',
        desc: 'Proactively initiate corporate vortals via bricks-and clicks relationsh. Dynamically envisioneer cutting-edge paradigms via client-centered relationships. Globally repurpobackward-compatible.',
        expanded: 'd',
    },
    {
        title: 'What does IT stand for in IT department?',
        desc: 'Proactively initiate corporate vortals via bricks-and clicks relationsh. Dynamically envisioneer cutting-edge paradigms via client-centered relationships. Globally repurpobackward-compatible.',
        expanded: 'e',
    },
    {
        title: 'What is a software solution company?',
        desc: 'Proactively initiate corporate vortals via bricks-and clicks relationsh. Dynamically envisioneer cutting-edge paradigms via client-centered relationships. Globally repurpobackward-compatible.',
        expanded: 'f',
    },
]

const FAQ = () => {

    
    return (
        <Fragment>
            <Accordion className="accordion accordion-one" preExpanded={["a"]}
                allowZeroExpanded>
                {faqContent.map((val, i)=>(
                    <AccordionItem className="accordion-item" key={i} uuid={val.expanded}>
                    <AccordionItemHeading className="accordion-header">
                        <AccordionItemButton>
                            {val.title}
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel
                        className="accordion-collapse collapse show">
                        <div className="accordion-body">
                            <p>{val.desc}</p>
                        </div>
                    </AccordionItemPanel>
                </AccordionItem>
                ))}
            </Accordion>
        </Fragment>
    )
}

export default FAQ








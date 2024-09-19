import React, { useContext } from 'react'
import { createContext } from 'react'
const AccordionItemContext = createContext()
export function useAccordionItemContext() {
    const cntxt = useContext(AccordionItemContext)
    if (!cntxt) {
        throw new Error("Accordion related context must be wrapped")
    }
    return cntxt
}
const AccordionItem = ({ className, children, id }) => {

    return (
        <AccordionItemContext.Provider value={id}>
            <li className={className}>
                {children}

            </li>
        </AccordionItemContext.Provider>

    )
}

export default AccordionItem

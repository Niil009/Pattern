import { createContext, useContext, useState } from "react"
const AccordionContext = createContext()
import AccordionItem from "./AccordionItem"
import AccordionTitle from "./AccordionTitle"
import AccordionContent from "./AccordionContent"
export function useAccordionContext() {
    const contxt = useContext(AccordionContext)
    if (!contxt) {
        throw new Error("Accordion related component must be wrapped by <Accordion>")
    }
    return contxt
}
const Accordion = ({ children, className }) => {
    const [openItemId, setOpenItemId] = useState(false)
    const toggleBtn = (id) => {
        setOpenItemId(prev => prev === id ? null : id)
    }
    const contextValue = {
        openItemId,
        toggleBtn
    }

    return (
        <AccordionContext.Provider value={contextValue}>
            <ul className={className}>
                {
                    children
                }
            </ul>
        </AccordionContext.Provider>

    )
}

export default Accordion
// Here we are storing the accordion -item as value to accordion component
Accordion.item = AccordionItem
Accordion.title = AccordionTitle
Accordion.content = AccordionContent

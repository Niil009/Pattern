import { useAccordionContext } from "./Accordion"
import { useAccordionItemContext } from "./AccordionItem"
const AccordionContent = ({ className, children }) => {
    const { openItemId } = useAccordionContext()
    const id = useAccordionItemContext()
    const isOpen = openItemId === id
    return (
        <div>
            <div className={isOpen ? `${className ?? ""}open` : `${className ??''}close`} >{children}</div>
        </div>
    )
}

export default AccordionContent

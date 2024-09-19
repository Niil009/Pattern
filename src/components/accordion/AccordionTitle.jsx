import { useAccordionContext } from "./Accordion"
import { useAccordionItemContext } from "./AccordionItem"

const AccordionTitle = ({ children, className }) => {
    const id = useAccordionItemContext()
    const { toggleBtn } = useAccordionContext()
    return (

        <h3 className={className} onClick={() => toggleBtn(id)}>{children}</h3>
    )
}

export default AccordionTitle

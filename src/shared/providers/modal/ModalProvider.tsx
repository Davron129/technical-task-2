import { ModalContext } from "@shared/contexts";
import { FC, PropsWithChildren, ReactNode, useState } from "react";
import { createPortal } from "react-dom";

export const ModalProvider: FC<PropsWithChildren> = ({ children }) => {
    const [component, setComponent] = useState<ReactNode>(null)
    const [isOpen, setIsOpen] = useState(false);

    const addComponent = (component: ReactNode) => {
        setIsOpen(true);
        setComponent(component);
    }

    const removeComponent = () => {
        setComponent(null);
        setIsOpen(false);
    }

    return (
        <ModalContext.Provider value={{addComponent, removeComponent}}>
            { children }
            
            {
                isOpen && createPortal(component, document.body)
            }
        </ModalContext.Provider>
    )
}
import { ModalContext } from "@shared/contexts"
import { ReactNode, useContext } from "react"

export const useModal = () => {
    const { addComponent, removeComponent } = useContext(ModalContext)

    const openModal = (component: ReactNode) => {
        addComponent(component);
    }

    const closeModal = () => {
        removeComponent();
    }

    return {
        openModal,
        closeModal
    }
}
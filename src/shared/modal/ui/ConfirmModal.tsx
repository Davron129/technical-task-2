import { FC } from "react";
import { Modal, ModalProps } from ".";

interface Props extends ModalProps {
    onConfirm: () => void;
    confirmationText: string;
}

export const ConfirmModal: FC<Props> = ({ onConfirm, confirmationText, ...props }) => {
    return (
        <Modal {...props}>
            <div className="p-5 border-b border-gray-200">
                <span>{confirmationText}</span>
            </div>
            <div className="px-5 py-2 flex items-center justify-between">
                <button 
                    onClick={props.onClose}
                    className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
                >
                    Cancel
                </button>
                <button 
                    onClick={onConfirm}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  focus:outline-none dark:focus:ring-blue-800"
                >
                    OK
                </button>
            </div>
        </Modal>
    )
}
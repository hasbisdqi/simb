"use client";

import { createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";

const modalContext = createContext<{ get: boolean, set: React.Dispatch<React.SetStateAction<boolean>> }>({ get: false, set: () => { } });

export default function Modal({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <modalContext.Provider value={{ get: isOpen, set: setIsOpen }}>
      {children}
    </modalContext.Provider>
  );
}

function ModalContent({ children }: { children: React.ReactNode }) {
  const { get: isOpen, set: setIsOpen } = useContext(modalContext);

  if (!isOpen) return null;

  return createPortal((
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-1100 w-screen h-screen" onClick={() => setIsOpen(false)}>
      <div className="bg-white rounded-lg shadow-lg p-6 w-[70%] h-[70%] flex flex-col" onClick={(e) => { e.stopPropagation() }}>
        {children}
      </div>
    </div>
  ), document.body);
}

function ModalTrigger({ children }: { children: React.ReactNode }) {
  const { set: setIsOpen } = useContext(modalContext);

  return (
    <button className="bg-none border-none" onClick={() => setIsOpen(true)}>
      {children}
    </button>
  );
}

function ModalHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-b pb-4 mb-4">
      <h2 className="text-xl font-bold text-left">{children}</h2>
    </div>
  );
}
function ModalBody({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 text-left overflow-y-auto max-h-full">
      {children}
    </div>
  );
}

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Content = ModalContent;
Modal.Trigger = ModalTrigger;

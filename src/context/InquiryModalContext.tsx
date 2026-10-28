import { createContext, useContext, useState, type ReactNode } from 'react'

interface InquiryModalContextType {
  isOpen: boolean
  initialService?: string
  openInquiryModal: (service?: string) => void
  closeInquiryModal: () => void
}

const InquiryModalContext = createContext<InquiryModalContextType>({
  isOpen: false,
  openInquiryModal: () => {},
  closeInquiryModal: () => {},
})

export function InquiryModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [initialService, setInitialService] = useState<string | undefined>()

  const openInquiryModal = (service?: string) => {
    setInitialService(service)
    setIsOpen(true)
  }

  const closeInquiryModal = () => {
    setIsOpen(false)
  }

  return (
    <InquiryModalContext.Provider
      value={{
        isOpen,
        initialService,
        openInquiryModal,
        closeInquiryModal,
      }}
    >
      {children}
    </InquiryModalContext.Provider>
  )
}

export function useInquiryModal() {
  const context = useContext(InquiryModalContext)
  if (!context) {
    throw new Error('useInquiryModal must be used within an InquiryModalProvider')
  }
  return context
}


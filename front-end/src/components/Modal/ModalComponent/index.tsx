import { ModalContainer } from "./style";

interface ModalProps {
  children: React.ReactNode;
}

const ModalComponent = ({ children }: ModalProps) => {
  return <ModalContainer>{children}</ModalContainer>;
};

export { ModalComponent };

import { useContext } from "react";
import { ContactsContext } from "../../../contexts/contactsContext";
import jwt_decode from "jwt-decode";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UpdateContactSchema } from "../../../schemas/contactSchema";
import { ContactUpdate } from "../../../contexts/contactsContext/interfaces";
import {
  ButtonWrapper,
  InputWrapper,
  StyledButton,
  StyledInput,
  StyledTitle,
  UpdateForm,
} from "./style";

export const UpdateContactForm = () => {
  const { updateContact, setCurrentModal, contactId } =
    useContext(ContactsContext);

  const { handleSubmit, register } = useForm<ContactUpdate>({
    resolver: zodResolver(UpdateContactSchema),
  });

  const onSubmit = (data: ContactUpdate) => {
    Object.keys(data).forEach((key: string) => {
      if (data[key] === "") {
        delete data[key];
      }
    });

    updateContact(data, contactId!);
    setCurrentModal("");
  };

  return (
    <UpdateForm onSubmit={handleSubmit(onSubmit)}>
      <StyledTitle type={"heading1"}>Atualizar contato</StyledTitle>
      <InputWrapper>
        <StyledInput {...register("name")} placeholder="Name" />
        <StyledInput
          {...register("email", { required: false })}
          placeholder="Email"
        />
        <StyledInput {...register("phone")} placeholder="Phone" />
      </InputWrapper>
      <ButtonWrapper>
        <StyledButton>Atualizar</StyledButton>
        <StyledButton onClick={() => setCurrentModal("")}>Fechar</StyledButton>
      </ButtonWrapper>
    </UpdateForm>
  );
};

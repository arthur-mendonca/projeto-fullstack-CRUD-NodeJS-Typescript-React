import { useContext } from "react";
import { ContactsContext } from "../../../contexts/contactsContext";
import jwt_decode from "jwt-decode";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AddContactSchema } from "../../../schemas/contactSchema";
import { ContactRequestData } from "../../../contexts/contactsContext/interfaces";
import {
  ButtonWrapper,
  FormWrapper,
  InputWrapper,
  StyledButton,
  StyledErrorText,
  StyledInput,
  StyledTitle,
} from "./style";

interface DecodedToken {
  sub: string;
}

export const AddContactForm = () => {
  const { addNewContact, setCurrentModal } = useContext(ContactsContext);

  const token = localStorage.getItem("@token");
  const decoded = jwt_decode<DecodedToken>(token!);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ContactRequestData>({
    resolver: zodResolver(AddContactSchema),
  });

  const onSubmit = async (data: ContactRequestData) => {
    console.log(decoded);
    console.log(data);
    addNewContact(data, decoded.sub);
  };

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <StyledTitle type={"heading1"}>Adicionar contato</StyledTitle>
      <InputWrapper>
        <StyledInput type="text" {...register("name")} placeholder="Name" />
        {errors.name?.message && (
          <StyledErrorText type="error">{errors.name.message}</StyledErrorText>
        )}
        <StyledInput type="text" {...register("email")} placeholder="Email" />
        {errors.email?.message && (
          <StyledErrorText type="error">{errors.email.message}</StyledErrorText>
        )}
        <StyledInput type="text" {...register("phone")} placeholder="Phone" />
        {errors.phone?.message && (
          <StyledErrorText type="error">{errors.phone.message}</StyledErrorText>
        )}
      </InputWrapper>
      <ButtonWrapper>
        <StyledButton>Adicionar</StyledButton>
        <StyledButton onClick={() => setCurrentModal("")}>Fechar</StyledButton>
      </ButtonWrapper>
    </FormWrapper>
  );
};

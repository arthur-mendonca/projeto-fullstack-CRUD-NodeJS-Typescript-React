import { useContext } from "react";
import { ContactsContext } from "../../../contexts/contactsContext";
import jwt_decode from "jwt-decode";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UpdateContactSchema } from "../../../schemas/contactSchema";
import { ContactUpdate } from "../../../contexts/contactsContext/interfaces";
import { StyledButton, StyledInput, UpdateForm } from "./style";

interface DecodedToken {
  sub: string;
}

export const UpdateContactForm = () => {
  const { updateContact, setCurrentModal, contactId } =
    useContext(ContactsContext);

  const token = localStorage.getItem("@token");
  const decoded = jwt_decode<DecodedToken>(token!);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ContactUpdate>({
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
      <StyledInput {...register("name")} placeholder="Name" />
      <StyledInput
        {...register("email", { required: false })}
        placeholder="Email"
      />
      <StyledInput {...register("phone")} placeholder="Phone" />
      <StyledButton>Atualizar</StyledButton>
      <StyledButton onClick={() => setCurrentModal("")}>Fechar</StyledButton>
    </UpdateForm>
  );
};

import { useContext } from "react";
import { ContactsContext } from "../../../contexts/contactsContext";
import jwt_decode from "jwt-decode";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AddContactSchema } from "../../../schemas/contactSchema";
import { ContactRequestData } from "../../../contexts/contactsContext/interfaces";

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register("name")} placeholder="Name" />
      {errors.name?.message && <p>{errors.name.message}</p>}
      <input type="text" {...register("email")} placeholder="Email" />
      {errors.email?.message && <p>{errors.email.message}</p>}
      <input type="text" {...register("phone")} placeholder="Phone" />
      {errors.phone?.message && <p>{errors.phone.message}</p>}
      <button>Add</button>
      <button onClick={() => setCurrentModal("")}>Close</button>
    </form>
  );
};

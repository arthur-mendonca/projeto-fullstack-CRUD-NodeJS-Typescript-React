export interface ILoginContext {
  loginRequest: (formData: ILoginFormData) => Promise<string | undefined>;
}

export interface ILoginProvider {
  children: React.ReactNode;
}

export interface ILoginFormData {
  email: string;
  password: string;
}

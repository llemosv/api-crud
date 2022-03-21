interface ICreateUserDTO {
  name: string;
  password: string;
  email: string;
  cpf: string;
  country: string;
  id?: string;
}

export { ICreateUserDTO };

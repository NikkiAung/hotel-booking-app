export type User = {
  id?: string;
  name: string;
  email: string;
  password: string;
  avatar: {
    url: string;
    public_id: string;
  };
  createdAt?: string;
  updatedAt?: string;
};

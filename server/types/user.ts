export type User = {
  id?: string;
  name: string;
  email: string;
  password: string;
  role?: [string];
  avatar: {
    url: string;
    public_id: string;
  };
  resetPasswordToken?: string | undefined;
  resetPasswordExpire?: Date | undefined;
  createdAt?: string;
  updatedAt?: string;
};

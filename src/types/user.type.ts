export type UserRequestBody = {
  email: string;
  password: string;
  password_confirmation?: string;
}

export type LoginRequestBody = Omit<UserRequestBody, "password_confirmation">; 
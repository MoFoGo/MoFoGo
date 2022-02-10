export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  owner?: string | null;
  password: string;
  roles: Array<string>;
  username: string;
};

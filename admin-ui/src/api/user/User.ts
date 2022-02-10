export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  owner: string | null;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};

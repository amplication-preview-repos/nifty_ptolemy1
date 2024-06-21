import { User } from "../user/User";

export type Enterprise = {
  contactDetails: string | null;
  createdAt: Date;
  id: string;
  name: string | null;
  updatedAt: Date;
  users?: Array<User>;
};

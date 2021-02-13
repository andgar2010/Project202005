export interface User {
  id: string;
  name: string;
  role: string;
  jiraAdmin: boolean;
  added: Date;
}

import db from "../config/databases.ts";
const userDB = db.collection("users");

export default userDB;

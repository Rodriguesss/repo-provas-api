import { connect } from "../database";
import { UserRequestBody } from "../types/user.type";

async function insertOne(createUserData: UserRequestBody) {
  await connect.users.create({ data: createUserData });
}

async function findEmail(email: string) {
  return await connect.users.findUnique({ where: { email } });
}

export default {
  insertOne,
  findEmail,
}
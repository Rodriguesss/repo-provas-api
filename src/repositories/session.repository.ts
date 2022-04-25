import { connect } from "../database";
import { SessionData } from "../types/session.type";

async function insertOne(sessionData: SessionData,) {
  await connect.sessions.create({ data: sessionData });
}

export default {
  insertOne
}
import { UserRequestBody, LoginRequestBody } from "../types/user.type";
import "dotenv/config";
import bcrypt from "bcrypt";
import jwt, { Secret } from "jsonwebtoken";
import userRepository from "../repositories/user.repositories";
import * as errorType from "../utils/errorTypes";
import { Users } from "@prisma/client";
import sessionRepository from "../repositories/session.repository";

async function insertNewUser(user: UserRequestBody) {
  delete user.password_confirmation;
  
  const passwordHash = bcrypt.hashSync(user.password, 10);

  await userRepository.insertOne({...user, password: passwordHash});
}

async function checkEmailAlreadyRegistered(email: string) {
  const emailExists = await userRepository.findEmail(email);

  if (emailExists) throw errorType.badRequest('Email já cadastrado.');
}

async function findEmail(email: string) {
  return await userRepository.findEmail(email);
}

async function signIn(user: Users | null, password: string) {
  const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY as Secret;

  if (user && bcrypt.compareSync(password, user.password)) {
    const { id: userId, email } = user;

    const token = jwt.sign({ userId, email }, JWT_SECRET_KEY, {
      expiresIn: process.env.JWT_EXPIRES_IN
    })

    await sessionRepository.insertOne({ userId });

    return token;
  } else {
    throw errorType.badRequest('Email ou senha inválidos.');
  }
}

export default {
  insertNewUser,
  checkEmailAlreadyRegistered,
  findEmail,
  signIn
}
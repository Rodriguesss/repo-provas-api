import { Request, Response } from "express";
import userService from "../services/user.service";
import { LoginRequestBody } from "../types/user.type";

export async function signIn(req: Request, res: Response) {
  const { email, password }: LoginRequestBody = req.body;

  const user = await userService.findEmail(email);

  const token = await userService.signIn(user, password);

  res.locals['token'] = token;

  res.status(200).send({ token });
}
import { Request, Response } from "express";
import userService from "../services/user.service";
import { UserRequestBody } from "../types/user.type";

export async function create(req: Request, res: Response) {
  const body: UserRequestBody = req.body;

  await userService.checkEmailAlreadyRegistered(body.email);
  await userService.insertNewUser(body);

  res.sendStatus(201);
}
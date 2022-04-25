import { Sessions } from "@prisma/client";

export type SessionData = Omit<Sessions, "id">;
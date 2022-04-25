import "dotenv/config";
import { PrismaClient} from "@prisma/client";

export const connect = new PrismaClient();
import dotenv from "dotenv";
dotenv.config({ quiet: true });

export const PORT = process.env.PORT;
export const DATABASE_URL = process.env.DATABASE_URL;
export const NODE_ENV = process.env.NODE_ENV;

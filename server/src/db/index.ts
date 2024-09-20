import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "../db/schema";

export const pool = new Pool({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
	port: Number(process.env.DB_PORT),
	//max: 20, //
	//idleTimeoutMillis: 30000, //
	//connectionTimeoutMillis: 2000, //
});

export const db = drizzle(pool, { schema });

//export const closePool = async () => {
//	await pool.end();
//};

// pool.on("error", (err) => {
// 	console.error("Unexpected error on idle client", err);
// 	process.exit(-1);
// });

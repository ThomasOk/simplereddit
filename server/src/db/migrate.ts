import "dotenv/config";
import { migrate } from "drizzle-orm/node-postgres/migrator";
import { db, pool } from "./index";

async function runMigrations() {
	try {
		// Exécution des migrations
		await migrate(db, { migrationsFolder: "./src/db/migrations" });
		console.log("Migrations completed successfully");
	} catch (error) {
		console.error("Error during migration:", error);
	} finally {
		// Fermeture du pool de connexions
		await pool.end();
		console.log("close the connection");
	}
}

runMigrations();

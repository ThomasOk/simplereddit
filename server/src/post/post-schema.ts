import {
	pgTable,
	serial,
	text,
	integer,
	timestamp,
	pgEnum,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
//import { users } from '../user/user-schema';
//import { updoots } from '../updoot/updoot-schema';

// Définition de l'enum pour le vote status
// export const voteStatusEnum = pgEnum("vote_status", [
// 	"upvote",
// 	"downvote",
// 	"novote",
// ]);

export const post = pgTable("post", {
	id: serial("id").primaryKey(),
	title: text("title").notNull(),
	text: text("text").notNull(),
	//points: integer("points").notNull().default(0),
	//voteStatus: voteStatusEnum("vote_status").default("novote"),
	//creatorId: integer("creator_id").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Définition des relations
// export const postsRelations = relations(posts, ({ one, many }) => ({
// 	creator: one(users, {
// 		fields: [posts.creatorId],
// 		references: [users.id],
// 	}),
// 	updoots: many(updoots),
// }));

// Types inférés
export type Post = typeof post.$inferSelect;
export type NewPost = typeof post.$inferInsert;

// Type pour inclure le vote status et le créateur
// export interface PostWithDetails extends Post {
// 	voteStatus: "upvote" | "downvote" | "novote" | null;
// 	creator: {
// 		id: number;
// 		username: string;
// 	};
// }

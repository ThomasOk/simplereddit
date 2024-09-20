import { post } from "../post/post-schema";
// import { users } from '../user/user-schema';

export { post };

export type Schema = {
	post: typeof post;
	// users: typeof users,  // Uncomment when you add the users schema
};

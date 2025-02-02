import { z } from "zod";

export const messageSchema = z.object({
	id: z.string(),
	isUserMessage: z.boolean(),
	text: z.string(),
});

// Array validator for messages
export const messageArraySchema = z.array(messageSchema);

export type Message = z.infer<typeof messageSchema>;

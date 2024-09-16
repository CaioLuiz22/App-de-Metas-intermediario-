import { db } from "../db";
import { goals } from "../db/schema";

interface CreateGoalRequest {
	title: string;
	desiredWeeklyFrequency: number;
}

export async function createGoal({
	title,
	desiredWeeklyFrequency,
}: CreateGoalRequest) {
	const result = await db
		.insert(goals)
		.values({
			title,
			desiredWeeklyFrequency,
		})
		.returning(); // permite que os valores do insert retornem e consigam ser usados no const goal

	const goal = result[0];

	return {
		goal,
	};
}

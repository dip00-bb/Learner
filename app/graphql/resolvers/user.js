import { db } from "@/lib/dbConnect";

export const userResolvers = {
    Query: {
        users: async () => {
            try {
                const [rows] = await db.execute(`SELECT * FROM Users`);
                return rows
            } catch (error) {
                console.error("Database Error")
                throw new Error ("Failed to fetch user")
            }
        },
    },
    Mutation: {
        addUser: (_, { name, email }) => ({ id: "2", name, email }),
    },
};

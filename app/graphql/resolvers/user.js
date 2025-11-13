import { db } from "@/lib/dbConnect";

export const userResolvers = {
    Query: {
        users: async () => {
            try {
                const [rows] = await db.execute(`SELECT * FROM Users`);
                return rows
            } catch (error) {
                console.error("Database Error")
                throw new Error("Failed to fetch user")
            }
        },
    },
    Mutation: {
        addUser: async (_, { input }) => {
            try {
                const { firstName, lastName, email } = input
                console.log(firstName, lastName, email)
                const query = `
                    INSERT INTO Users (firstName, lastName, email) 
                    VALUES (?, ?, ?)
                    `
                db.execute(
                    query,
                    [firstName, lastName, email]
                )
            } catch (error) {
                console.log(error)
            }
        },
    },
};

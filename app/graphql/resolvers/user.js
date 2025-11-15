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
                const query = `
                    INSERT INTO Users (firstName, lastName, email) 
                    VALUES (?, ?, ?)
                    `
                const response= await db.execute(
                    query,
                    [firstName, lastName, email]
                )
                const token="asjkfajskfajsjkfjksdjkjfjfsdjfrsjk"
                return{
                    id:response.insertedId,
                    token
                } 

            } catch (error) {
                console.log(error)
            }
        },
    },
};

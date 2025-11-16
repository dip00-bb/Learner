import { registerQuery } from "@/app/SqlQuaries/userRelatedQuaries";
import { generateJsonWebToken } from "@/app/utilitis/generateJwtToekn";
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
                const response= await db.execute(
                    // registerQuery sql query. Hover to know more
                    registerQuery,
                    [firstName, lastName, email]
                )

                const token=generateJsonWebToken(email)
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

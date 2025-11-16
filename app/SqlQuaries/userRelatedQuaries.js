export const registerQuery =   `
                    INSERT INTO Users (firstName, lastName, email) 
                    VALUES (?, ?, ?)
                `
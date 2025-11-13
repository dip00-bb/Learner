import mysql from 'mysql2/promise' 

export const db=mysql.createPool({

    host:"localhost",
    user:"root",
    password:"SyZ24?u2=nSe2p6",
    database:"classroom_app_db"

}) 

try {
    const connection= await db.getConnection();
    connection.release()

} catch (error) {
    console.log("Data base connection failed",error)
    process.exit(1)
}
import jwt from 'jsonwebtoken'

export const generateJsonWebToken=(email)=>{
    return jwt.sign({email:email},process.env.NEXT_PUBLIC_JWT_SECRET,{
        expiresIn:'7d'
    })
} 
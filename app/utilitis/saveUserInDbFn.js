export const handleSaveUserInDB= async (mutationName,object)=>{

    console.log(mutationName,object)
    try {
      const response=await mutationName({
        variables:{
            userInfo:{
                firstName:object.firstName,
                lastName:object.lastName,
                email:object.email
            }
        }
      })
      console.log(response)
    } catch (error) {
        console.log(error)
    }
}
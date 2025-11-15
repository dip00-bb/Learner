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
      console.log("jhu",response)
    } catch (error) {
        console.log("jkhh",error,typeof(error))
    }
}
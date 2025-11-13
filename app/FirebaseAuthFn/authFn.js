import { handleSaveUserInDB } from "../utilitis/saveUserInDbFn";

// register function
export const handleEmailPassReg = (register, update, setuser, dataObj,gqlMutationName) => {
    console.log(dataObj)
    register(dataObj.email, dataObj.password)
        .then((res) => {
            if (res.user) {

                const user = res.user
                update(dataObj.userName).then(() => {

                    setuser({ ...user, displayName: dataObj.firstName });

                    const userInformation = {
                        firstName: dataObj.firstName,
                        lastName: dataObj.lastName,
                        email: dataObj.email,
                    };

                    handleSaveUserInDB(gqlMutationName,userInformation)

                }).catch(error => {
                    console.log(error.message)

                })
            }

        })
        .catch((error) => {
            console.log(error.message)
        });

}

// login function
export const handleEmailPassLogIn = (loginFn, dataObj, successAlert, errorAlert) => {
    loginFn(dataObj.email, dataObj.password).then(() => {
        successAlert("Welcome back")
    }).catch(err => {
        errorAlert(err.message)
    })
}


export const googleLoginFn = (loginFn, apiPublic, successAlert, errorAlert) => {
    loginFn()
        .then((res) => {
            const user = res.user
            const userInformation = {
                firstName: user.displayName.split(" ")[0],
                lastName: user.displayName.split(" ")[1],
                email: user.email,
                photoURL: user.photoURL,
                UID: user.uid
            };

            successAlert("User registered successfully")


            apiPublic.post('/user', userInformation)
                .then(() => {
                    return


                }).catch((err) => {
                    return
                })


        }).catch(errors => {
            errorAlert(errors.message)
        })
}


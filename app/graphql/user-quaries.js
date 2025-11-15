import { gql } from 'graphql-tag';

const SAVE_USER_IN_DB=gql`
    mutation saveUserInDB($userInfo:UserInfo!){
        addUser(input:$userInfo){
            token
        }
    }
`

export default SAVE_USER_IN_DB
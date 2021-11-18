import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "us-east-2_iBzCmTA5R",
    ClientId: "2ifdjh17k4kinmb7ddit96084p"
}

export default new CognitoUserPool(poolData);
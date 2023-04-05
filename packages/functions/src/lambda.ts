import { ApiHandler } from "sst/node/api";
import { LambdaUtils } from "@tailwarden-backend-challenge/core/lambdaUtils";

export const handler = ApiHandler(async (_evt) => {
  const allLambdas = await LambdaUtils.getAllLambda();
  console.log("🚀 ~ file: lambda.ts:6 ~ handler ~ allLambdas:", allLambdas);

  return {
    body: allLambdas.Functions.map((lambda: any) => ({
      name: lambda.FunctionName,
      arn: lambda.FunctionArn,
    })),
  };
});

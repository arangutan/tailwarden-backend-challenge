export * as LambdaUtils from "./lambdaUtils";

const {
  LambdaClient,
  ListFunctionsCommand,
} = require("@aws-sdk/client-lambda"); // CommonJS import

export async function getAllLambda() {
  const client = new LambdaClient({ region: "us-east-1" });
  const input = {
    // ListFunctionsRequest
    // MasterRegion: "STRING_VALUE",
    FunctionVersion: "ALL",
    // Marker: "STRING_VALUE",
    MaxItems: 100,
  };
  const command = new ListFunctionsCommand(input);
  const response = await client.send(command);
  return response;
}

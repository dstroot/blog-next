import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import {
  DynamoDBDocumentClient,
  GetCommand,
  UpdateCommand,
} from '@aws-sdk/lib-dynamodb';

/*

Note that we're using AWS-SDK v3, and the DynamoDBDocumentClient which will simplify querying our Database from within our code. Additionally, its important *not* to use the variable names AWS provided us with: e.g AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY. These are reserved variable names on Vercel so we cannot use them.  The problem was AWS documentation doesn't explain how to do that so I finally figured it out below. 

 */

// Create an Amazon DynamoDB service client object.
const client = new DynamoDBClient({
  credentials: {
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_KEY,
  },
  region: process.env.REGION,
});

const marshallOptions = {
  // Whether to automatically convert empty strings, blobs, and sets to `null`.
  convertEmptyValues: false, // false, by default.
  // Whether to remove undefined values while marshalling.
  removeUndefinedValues: false, // false, by default.
  // Whether to convert typeof object to map attribute.
  convertClassInstanceToMap: false, // false, by default.
};

const unmarshallOptions = {
  // Whether to return numbers as a string instead of converting them to native JavaScript numbers.
  wrapNumbers: false, // false, by default.
};

const translateConfig = { marshallOptions, unmarshallOptions };

// Create the DynamoDB *Document* client
export const ddbDocClient = DynamoDBDocumentClient.from(
  client,
  translateConfig
);

// export simple operaters (document client)
export const get = (params) => ddbDocClient.send(new GetCommand(params));
export const upd = (params) => ddbDocClient.send(new UpdateCommand(params));

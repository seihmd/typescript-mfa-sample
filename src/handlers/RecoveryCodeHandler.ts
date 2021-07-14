import { FastifyReply, FastifyRequest } from 'fastify';
import { DynamoDBClient, ListTablesCommand } from '@aws-sdk/client-dynamodb';

export const postRecoveryCodeHandler: (
  request: FastifyRequest,
  reply: FastifyReply
) => Promise<unknown> = async function (
  request: FastifyRequest,
  reply: FastifyReply
) {
  return 'postRecoveryCodeHandler\n';
};

export const getRecoveryCodeHandler: (
  request: FastifyRequest,
  reply: FastifyReply
) => Promise<unknown> = async function (
  request: FastifyRequest,
  reply: FastifyReply
) {
  const client = new DynamoDBClient({
    region: 'us-east-1',
    endpoint: 'http://db:8000',
  });
  const command = new ListTablesCommand({});
  try {
    const results = await client.send(command);
    if (!results.TableNames) {
      return 'results.TableNames is undefined';
    }
    console.log(results.TableNames);
  } catch (err) {
    console.error(err);
  }

  return 'getRecoveryCodeHandler\n';
};

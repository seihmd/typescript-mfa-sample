import { FastifyReply, FastifyRequest } from 'fastify';

export const postSecretHandler: (
  request: FastifyRequest,
  reply: FastifyReply
) => Promise<unknown> = async function (
  request: FastifyRequest,
  reply: FastifyReply
) {
  return 'postSecretHandler\n';
};

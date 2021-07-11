import { FastifyReply, FastifyRequest } from 'fastify';

export const pingHandler: (
  request: FastifyRequest,
  reply: FastifyReply
) => Promise<unknown> = async function (
  request: FastifyRequest,
  reply: FastifyReply
) {
  return 'aaagaaa\n';
};

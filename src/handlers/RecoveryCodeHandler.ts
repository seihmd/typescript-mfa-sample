import { FastifyReply, FastifyRequest } from 'fastify';

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
  return 'getRecoveryCodeHandler\n';
};

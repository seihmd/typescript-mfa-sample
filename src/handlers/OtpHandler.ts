import { FastifyReply, FastifyRequest } from 'fastify';

export const postOtpHandler: (
  request: FastifyRequest,
  reply: FastifyReply
) => Promise<unknown> = async function (
  request: FastifyRequest,
  reply: FastifyReply
) {
  return 'postOtpHandler\n';
};

import { FastifyReply, FastifyRequest } from 'fastify';

export const ActivationHandler: (
  request: FastifyRequest,
  reply: FastifyReply
) => Promise<unknown> = async function (
  request: FastifyRequest,
  reply: FastifyReply
) {
  const { otp } = request.body;

  return 'postOtpHandler\n';
};

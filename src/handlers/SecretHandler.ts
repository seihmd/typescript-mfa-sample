import { FastifyReply, FastifyRequest } from 'fastify';
import { authenticator } from '@otplib/preset-default';

export const postSecretHandler: (
  request: FastifyRequest,
  reply: FastifyReply
) => Promise<unknown> = async function (
  request: FastifyRequest,
  reply: FastifyReply
) {
  const secret = authenticator.generateSecret(); // base32 encoded hex secret key
  const token = authenticator.generate(secret);

  return { secret, token };
};

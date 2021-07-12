import fastify, { FastifyReply, FastifyRequest } from 'fastify';
import { postSecretHandler } from './handlers/SecretHandler';
import {
  getRecoveryCodeHandler,
  postRecoveryCodeHandler,
} from './handlers/RecoveryCodeHandler';
import { postOtpHandler } from './handlers/OtpHandler';

const server = fastify();

server.post('/secrets', postSecretHandler);
server.get('/recovery_codes', getRecoveryCodeHandler);
server.post('/recovery_codes', postRecoveryCodeHandler);
server.post('/otps', postOtpHandler);

server.listen(8001, '0.0.0.0', (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});

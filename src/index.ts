import fastify, { FastifyReply, FastifyRequest } from 'fastify';
import { InitializationHandler } from './handlers/InitializationHandler';

const server = fastify();

InitializationHandler('/:userId', 'get', server);

// server.post('/:userId/activate', ActivationHandler);
// server.post('/:userId/verify', VerificationHandler);
// server.get('/:userId/recovery_codes', GetRecoveryCodeHandler);
// server.post('/:userId/recovery', RecoveryHandler);
// server.post('/:userId/secrets', GetSecretHandler);

server.listen(8001, '0.0.0.0', (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});

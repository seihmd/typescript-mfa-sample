import fastify, { FastifyReply, FastifyRequest } from 'fastify';
import { RouteShorthandMethod } from 'fastify/types/route';
import { pingHandler } from './handlers/PingHandler';

const server = fastify();

const routes: [
  string,
  (request: FastifyRequest, reply: FastifyReply) => Promise<unknown>
][] = [['/ping', pingHandler]];

routes.forEach(([route, handler]) => {
  server.get(route, handler);
});

server.listen(8000, '0.0.0.0', (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});

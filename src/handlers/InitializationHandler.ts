import { FastifyInstance } from 'fastify';

export const InitializationHandler = (
  route: string,
  method: 'post' | 'get',
  server: FastifyInstance
): any => {
  server[method]<{ Params: { userId: string }; Body: { code: string } }>(
    route,
    async (request, reply) => {
      const { userId } = request.params;
      const { code } = request.body;

      return `logged in!`;
    }
  );
};

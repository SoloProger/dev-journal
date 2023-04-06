import { FastifyReply, FastifyRequest } from "fastify";

export abstract class AbstractController<T> {
  public abstract getAll(request: FastifyRequest, replay: FastifyReply): T;

  public abstract getOne(request: FastifyRequest, replay: FastifyReply): T;

  public abstract create(request: FastifyRequest, replay: FastifyReply): T;

  public abstract update(request: FastifyRequest, replay: FastifyReply): T;

  public abstract remove(request: FastifyRequest, replay: FastifyReply): T;
}

import { Model } from "sequelize";
import { PATHS } from "./../core/utils/paths";
import { BaseHandler } from "../core/base/handler.base";
import { BaseController } from "../core/base/controller.base";
import { PostService } from "../post/post.service";
import { BaseRepository } from "../core/base/repository.base";
import createRoute from "../core/utils/createRoute";
import Role from "./role";

const router = (app: any) =>
  new BaseHandler(
    app,
    PATHS.ROLE_PATH,
    Role as unknown as Model,
    BaseController,
    PostService,
    BaseRepository
  );

export default (app: any, options: any, done: any) =>
  createRoute({ app, options, done, router });

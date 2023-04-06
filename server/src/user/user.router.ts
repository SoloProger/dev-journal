import { Model } from "sequelize";
import { BaseController } from "../core/base/controller.base";
import { BaseHandler } from "../core/base/handler.base";
import { BaseRepository } from "../core/base/repository.base";
import createRoute from "../core/utils/createRoute";
import { PATHS } from "../core/utils/paths";
import { PostService } from "../post/post.service";
import User from "./user";

const router = (app: any) =>
  new BaseHandler(
    app,
    PATHS.USER_PATH,
    User as unknown as Model,
    BaseController,
    PostService,
    BaseRepository
  );

export default (app: any, options: any, done: any) =>
  createRoute({ app, options, done, router });

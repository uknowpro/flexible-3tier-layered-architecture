import { BaseContext } from 'koa';
import { request, tagsAll } from 'koa-swagger-decorator';

import { GetHealthService } from '../../services';

@tagsAll(['Health'])
export default class {
  @request('get', '/health')
  public static async getHealth(ctx: BaseContext): Promise<undefined> {
    const getHealthService = new GetHealthService();
    const health = await getHealthService.health();
    Object.assign(ctx, {
      status: 204,
      body: health,
    });
  }
}

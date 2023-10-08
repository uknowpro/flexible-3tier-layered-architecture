import { BaseContext } from 'koa';
import { request, tagsAll } from 'koa-swagger-decorator';

import { GetHealthService } from '../../services';

@tagsAll(['Health'])
export default class {
  constructor(private readonly getHealthService: GetHealthService) {}
  @request('get', '/health')
  public async getHealth(ctx: BaseContext): Promise<undefined> {
    ctx.body = this.getHealthService.getHealth();
  }
}

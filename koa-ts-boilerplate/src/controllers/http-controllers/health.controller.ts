import { BaseContext } from 'koa';
import { request, tagsAll } from 'koa-swagger-decorator';

@tagsAll(['Health'])
export default class HealthController {
    @request('get', '/health')
    public static async getHealth(ctx: BaseContext): Promise<undefined> {
        ctx.body = undefined;
    }
}

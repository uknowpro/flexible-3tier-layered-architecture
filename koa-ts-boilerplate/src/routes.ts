import { SwaggerRouter } from 'koa-swagger-decorator';
import { health } from './controllers';

const controllerRouter = new SwaggerRouter();

controllerRouter.get('/health', health.getHealth);

export { controllerRouter };

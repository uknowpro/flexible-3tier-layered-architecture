import { SwaggerRouter } from 'koa-swagger-decorator';

import { HealthHttpController } from './controllers';

import { GetHealthService } from './services';

const controllerRouter = new SwaggerRouter();

const healthHttpController = new HealthHttpController(new GetHealthService());

controllerRouter.get('/health', healthHttpController.getHealth);

export { controllerRouter };

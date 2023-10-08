import { GetHealthQuery } from 'src/core/queries/get-health.query';

export default class implements GetHealthQuery {
  async getHealth(): Promise<undefined> {}
}

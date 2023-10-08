import { GetHealthQuery } from 'src/core/queries';

export default class implements GetHealthQuery {
  async health(): Promise<undefined> {}
}

import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity({
  tableName: 'users',
  comment: 'user table',
})
export default class {
  @PrimaryKey()
  id: number;

  @Property()
  name: string;
}

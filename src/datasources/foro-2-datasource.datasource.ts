import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'foro2datasource',
  connector: 'mongodb',
  url: 'mongodb+srv://cluster0.nqujh.mongodb.net/PeliculasAdmon',
  host: 'cluster0.nqujh.mongodb.net',
  port: 27017,
  user: 'Admin',
  password: '99094681Aa',
  database: 'PeliculasAdmon',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class Foro2DatasourceDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'foro2datasource';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.foro2datasource', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}

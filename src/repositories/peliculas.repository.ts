import {DefaultCrudRepository} from '@loopback/repository';
import {Peliculas, PeliculasRelations} from '../models';
import {Foro2DatasourceDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PeliculasRepository extends DefaultCrudRepository<
  Peliculas,
  typeof Peliculas.prototype._id,
  PeliculasRelations
> {
  constructor(
    @inject('datasources.foro2datasource') dataSource: Foro2DatasourceDataSource,
  ) {
    super(Peliculas, dataSource);
  }
}

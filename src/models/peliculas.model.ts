import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Peliculas extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  _id?: string;

  @property({
    type: 'string',
    required: true,
  })
  Nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  Genero: string;

  @property({
    type: 'number',
    required: true,
  })
  TiempoHoras: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Peliculas>) {
    super(data);
  }
}

export interface PeliculasRelations {
  // describe navigational properties here
}

export type PeliculasWithRelations = Peliculas & PeliculasRelations;

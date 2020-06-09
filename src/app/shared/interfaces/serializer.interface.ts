import { Resource } from './resource.interface';

export interface Serializable<T> {
  fromJson(json: any): T | T[];
  toJson(resource: T): string;
}

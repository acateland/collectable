import {SortedMapStructure} from '../internals';
import {size as _size} from '@collectable/red-black-tree';

export function size<K, V>(map: SortedMapStructure<K, V, any>): number {
  return _size(map._sorted);
}

export function isEmpty<K, V>(map: SortedMapStructure<K, V, any>): boolean {
  return _size(map._sorted) === 0;
}


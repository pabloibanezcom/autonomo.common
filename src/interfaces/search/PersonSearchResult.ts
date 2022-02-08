import Person from '../Person';
import BaseSearchResult from './BaseSearchResult';

export default interface PersonSearchResult extends BaseSearchResult {
  items: Person[];
}

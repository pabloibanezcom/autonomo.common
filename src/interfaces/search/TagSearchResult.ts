import Tag from '../Tag';
import BaseSearchResult from './BaseSearchResult';

export default interface TagSearchResult extends BaseSearchResult {
  items: Tag[];
}

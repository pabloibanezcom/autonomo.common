import Category from '../Category';
import BaseSearchResult from './BaseSearchResult';

export default interface CategorySearchResult extends BaseSearchResult {
  items: Category[];
}

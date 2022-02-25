import { BaseFilter } from '.';

export default interface BaseSearchResult extends BaseFilter {
  items?: any[];
}

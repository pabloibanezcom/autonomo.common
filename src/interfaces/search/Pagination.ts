export default interface Pagination {
  page: number;
  items?: number;
  totalPages?: number;
  totalItems?: number;
  prevPage?: number;
  nextPage?: number;
}

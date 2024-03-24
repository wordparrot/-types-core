export interface PaginationResponse<E> {
    currentPage: number;
    perPage: number;
    lastPage: number;
    data: E[];
    total: number;
    from?: number;
    to?: number;
    pageControls?: number[];
}
export type ServerPaginationResponse<E> = PaginationResponse<E>;

export const request = (page, filters) => ({
        type: 'REQUEST',
        isFetching: true,
        filters,
        page
})

export const firstPageResponse = (jobs, pages, filters) =>({
        type: 'FIRST_PAGE_RESPONSE',
        isFetching: false,
        jobs,
        pages,
        filters
})

export const nextPageResponse = (jobs, pages, filters) =>({
        type: 'NEXT_PAGE_RESPONSE',
        isFetching: false,
        jobs,
        pages,
        filters
})
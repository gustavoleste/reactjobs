export const sendToBookmark = (bookmark, item) =>({
        type: 'SEND_TO_BOOKMARK',
        bookmark,
        item
})

export const saveOnBookmark = bookmark =>({
        type: 'SAVE_ON_BOOKMARK',
        bookmark
})


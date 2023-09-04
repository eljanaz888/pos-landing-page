exports.onCreatePage = async ({ page, actions }) => {
    const { createPage, deletePage } = actions;

    // Check if the page is a 404 page and doesn't have the desired path
    if (page.path === '/404/' && page.path.slice(-1) !== '/') {
        const oldPage = { ...page };

        // Add a trailing slash to the path
        page.path = '/404/';

        // Recreate the modified 404 page
        deletePage(oldPage);
        createPage(page);
    }
};

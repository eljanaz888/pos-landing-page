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

    // Check if the page is a dynamic route for the default language (e.g., /some-page)
    if (page.path.match(/^\/[^/]+$/)) {
        const oldPage = { ...page };

        // Add a trailing slash to the path
        page.path = `${page.path}/`;

        // Recreate the modified page
        deletePage(oldPage);
        createPage(page);
    }

    // Check if the page is a dynamic route for the /en version (e.g., /en/some-page)
    if (page.path.match(/^\/en\/[^/]+$/)) {
        // You may choose to handle this differently based on your requirements
        // For example, you can create separate pages for /en/some-page/ if needed
    }

};


$(document).ready(() => {
    $.get('/api/posts', results => {
        outputPosts(results,$('.postsContainer'))
    })
})

function outputPosts(results,container){
    container.html('')
    results.forEach(elt => {
        const html=createPostHtml(elt)
        container.append(html)
    });
    if(!results.length){
        container.append("<span class='NoResults'>Nothing to show</span>")
    }

}
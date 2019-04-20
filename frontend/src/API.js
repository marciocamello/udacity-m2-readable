// API url from backend server
const api = "http://localhost:3001";

// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token;
if (!token)
    token = localStorage.token = Math.random().toString(36).substr(-8);

const headers = {
    'Accept': 'application/json',
    'Authorization': token
};

/**
 * API Class
 */
class API {

    /**
     * Get all of the categories available for the app. List is found in categories.js.
     * Feel free to extend this list as you desire.
     * @GET
     * @returns {Promise<Response | never>}
     */
    categories = () => {
        return fetch(`${api}/categories`, {headers})
            .then(res => res.json())
            .then(data => data);
    };

    /**
     * Get all of the posts for a particular category.
     * @GET
     * @param category
     * @returns {Promise<Response | never>}
     */
    categoryPosts = category => {
        return fetch(`${api}/${category}/posts`, {headers})
            .then(res => res.json())
            .then(data => data);
    };

    /**
     * Get all of the posts. Useful for the main page when no category is selected.
     * @GET
     * @returns {Promise<Response | never>}
     */
    posts = () => {
        return fetch(`${api}/posts`, {headers})
            .then(res => res.json())
            .then(data => {
                return {
                    posts: data
                }
            });
    };

    /**
     * Add a new post.
     *
     * @POST
     * @param post = {
     *     id - UUID should be fine, but any unique id will work ]
     *     timestamp - [Timestamp] Can in whatever format you like, you can use Date.now() if you like.
     *     title - [String]
     *     body - [String]
     *     author - [String]
     *     category - Any of the categories listed in categories.js. Feel free to extend this list as you desire.
     * }
     * @returns {Promise<Response | never>}
     */
    addPost = post => {
        return fetch(`${api}/posts`, {
            method: 'POST',
            headers: {
                ...headers,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({post})
        })
            .then(res => res.json())
            .then(data => data);
    };

    /**
     * Get the details of a single post.
     * @GET
     * @param id
     * @returns {Promise<Response | never>}
     */
    post = id => {
        return fetch(`${api}/posts/${id}`, {headers})
            .then(res => res.json())
            .then(data => {
                return {
                    post: data
                }
            });
    };

    /**
     * Used for voting on a post.
     * @POST
     * @param id
     * @param option = [String]: Either "upVote" or "downVote".
     * @returns {Promise<Response | never>}
     */
    postVote = (id, option) => {
        return fetch(`${api}/posts/${id}`, {
            method: 'POST',
            headers: {
                ...headers,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({option})
        })
            .then(res => res.json())
            .then(data => data);
    };

    /**
     * Edit the details of an existing post.
     * @PUT
     * @param id
     * @param post = {
     *     title - [String]
     *     body - [String]
     * }
     * @returns {Promise<Response | never>}
     */
    editPost = (id, post) => {
        return fetch(`${api}/posts/${id}`, {
            method: 'PUT',
            headers: {
                ...headers,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({post})
        })
            .then(res => res.json())
            .then(data => data);
    };

    /**
     * Sets the deleted flag for a post to 'true'.
     * Sets the parentDeleted flag for all child comments to 'true'.
     * @DELETE
     * @param id
     * @returns {Promise<Response | never>}
     */
    deletePost = id => {
        return fetch(`${api}/posts/${id}`, {
            method: 'DELETE',
            headers: {
                ...headers,
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => data);
    };

    /**
     * Get all the comments for a single post.
     * @GET
     * @param id
     * @returns {Promise<Response | never>}
     */
    postComments = id => {
        return fetch(`${api}/posts/${id}/comments`, {headers})
            .then(res => res.json())
            .then(data => {
                return {
                    postComments: data
                }
            });
    };

    /**
     * Add a comment to a post.
     *
     * @POST
     * @param comment = {
     *     id - Any unique ID. As with posts, UUID is probably the best here.
     *     timestamp - [Timestamp] Get this however you want.
     *     body - [String]
     *     author - [String]
     *     parentId - Should match a post id in the database.
     * }
     * @returns {Promise<Response | never>}
     */
    addComment = comment => {
        return fetch(`${api}/comments`, {
            method: 'POST',
            headers: {
                ...headers,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({comment})
        })
            .then(res => res.json())
            .then(data => data);
    };

    /**
     * Edit the details of an existing comment.
     *
     * @PUT
     * @param id
     * @param comment = {
     *     timestamp - timestamp. Get this however you want.
     *     body - [String]
     * }
     * @returns {Promise<Response | never>}
     */
    editComment = (id, comment) => {
        return fetch(`${api}/comments/${id}`, {
            method: 'PUT',
            headers: {
                ...headers,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({comment})
        })
            .then(res => res.json())
            .then(data => data);
    };
    /**
     * Get the details for a single comment.
     * @GET
     * @param id
     * @returns {Promise<Response | never>}
     */
    comment = id => {
        return fetch(`${api}/comments/${id}`, {headers})
            .then(res => res.json())
            .then(data => {
                return {
                    comment: data
                }
            });
    };

    /**
     * Used for voting on a comment.
     * @POST
     * @param id
     * @param option = [String]: Either "upVote" or "downVote".
     * @returns {Promise<Response | never>}
     */
    commentVote = (id, option) => {
        return fetch(`${api}/comments/${id}`, {
            method: 'POST',
            headers: {
                ...headers,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({option})
        })
            .then(res => res.json())
            .then(data => data);
    };

    /**
     * Sets a comment's deleted flag to true.
     * @DELETE
     * @param id
     * @returns {Promise<Response | never>}
     */
    deleteComment = id => {
        return fetch(`${api}/comments/${id}`, {
            method: 'DELETE',
            headers: {
                ...headers,
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => data);
    };


}

export default new API();
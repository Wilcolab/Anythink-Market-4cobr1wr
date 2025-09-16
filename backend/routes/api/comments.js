/**
 * Express router for comment-related API endpoints.
 * @module routes/api/comments
 */
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;

/**
 * GET /api/comments
 * Fetch all comments.
 * @name GET /api/comments
 * @function
 * @memberof module:routes/api/comments
 * @returns {Object[]} 200 - Array of comment objects
 * @returns {Object} 500 - Error message
 */
router.get("/", async (req, res) => {
    try {
        const comments = await Comment.find();
        res.json(comments);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch comments" });
    }
});


/**
 * POST /api/comments
 * Create a new comment.
 * @name POST /api/comments
 * @function
 * @memberof module:routes/api/comments
 * @param {Object} req.body - Comment data
 * @returns {Object} 201 - Created comment object
 * @returns {Object} 400 - Error message
 */
router.post("/", async (req, res) => {
    try {
        const comment = new Comment(req.body);
        await comment.save();
        res.status(201).json(comment);
    } catch (err) {
        res.status(400).json({ error: "Failed to create comment" });
    }
});

/**
 * GET /api/comments/:id
 * Fetch a comment by ID.
 * @name GET /api/comments/:id
 * @function
 * @memberof module:routes/api/comments
 * @param {string} id - Comment ID
 * @returns {Object} 200 - Comment object
 * @returns {Object} 404 - Not found error
 * @returns {Object} 400 - Invalid ID error
 */
router.get("/:id", async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.id);
        if (!comment) {
            return res.status(404).json({ error: "Comment not found" });
        }
        res.json(comment);
    } catch (err) {
        res.status(400).json({ error: "Invalid comment ID" });
    }
});


/**
 * DELETE /api/comments/:id
 * Delete a comment by ID.
 * @name DELETE /api/comments/:id
 * @function
 * @memberof module:routes/api/comments
 * @param {string} id - Comment ID
 * @returns {Object} 200 - Success message
 * @returns {Object} 404 - Not found error
 * @returns {Object} 400 - Invalid ID error
 */
router.delete("/:id", async (req, res) => {
    try {
        const comment = await Comment.findByIdAndDelete(req.params.id);
        if (!comment) {
            return res.status(404).json({ error: "Comment not found" });
        }
        res.json({ message: "Comment deleted successfully" });
    } catch (err) {
        res.status(400).json({ error: "Invalid comment ID" });
    }
});



/**
 * PUT /api/comments/:id
 * Update a comment by ID.
 * @name PUT /api/comments/:id
 * @function
 * @memberof module:routes/api/comments
 * @param {string} id - Comment ID
 * @param {Object} req.body - Updated comment data
 * @returns {Object} 200 - Updated comment object
 * @returns {Object} 404 - Not found error
 * @returns {Object} 400 - Invalid ID or data error
 */
router.put("/:id", async (req, res) => {
    try {
        const comment = await Comment.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!comment) {
            return res.status(404).json({ error: "Comment not found" });
        }
        res.json(comment);
    } catch (err) {
        res.status(400).json({ error: "Invalid comment ID or data" });
    }
});
const db = require("./db");
const boom = require("@hapi/boom");


const Comment = function (comment) {
    this.textComment = comment.textComment;
    this.userId = comment.userID;
    this.upvotes = comment.upvotes;
    this.replies = comment.reply.id;
}

Comment.createComment = async (newComment, userID, result) => {
    try {

        // const query = db.query
        // format("INSERT INTO comment SET ?", newComment);
        // const res = await excecute(query)
        // result(null, { id: res[0].insertId, ...newUser });
        // console.log("New User got registered: ", { id: res[0].insertId, email: newUser.email, firstName: newUser.firstName });
    } catch (err) {
        console.log("error: ", err);
        result(boom.internal(err.message), null);
    }
}

Comment.getCommentByPostId = async (postId, limit = undefined, result) => {
    try {
        
    } catch (err) {
        console.log("error: ", err);
        result(boom.internal(err.message), null);
    }
}

Comment.getReplies = async (commentId, limit = undefined, result) => {
    try {
        // const query
    } catch (err) {
        console.log("error: ", err);
        result(boom.internal(err.message), null);
    }
}

Comment.getNumberOfComments = async (postId, result) => {
    try {
        // const query
    } catch (err) {
        console.log("error: ", err);
        result(boom.internal(err.message), null);
    }
}

Comment.editComment = (commentId, newComment, result) => {
    try {
        // const query
    } catch (err) {
        console.log("error: ", err);
        result(boom.internal(err.message), null);
    }
}

Comment.updateVote = (commentId, voterId, vote, result) => {
    try {
        // const query
    } catch (err) {
        console.log("error: ", err);
        result(boom.internal(err.message), null);
    }
}

Comment.removeComment = (commentId, result) => {
    try {
        // format("DELETE FROM comment WHERE id = ?", commentId);
        // const res = await sql.query(query)
        // if (res[0].affectedRows === 0) {
        //   result({ kind: "not_found" }, null);
        // } else {
        //   console.log("Deleted id ", id)
        //   result(null, res[0], ...id)
        // }  

    } catch (err) {
        console.log("error: ", err);
        result(boom.internal(err.message), null);
    }
}

module.exports = Comment
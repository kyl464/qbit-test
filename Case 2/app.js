var comments = [
    {
        commentId: 1,
        commentContent: "Hai",
        replies: [
            {
                commentId: 11,
                commentContent: "Hai juga",
                replies: [
                    {
                        commentId: 111,
                        commentContent: "Haai juga hai jugaa",
                    },
                    {
                        commentId: 112,
                        commentContent: "Haai juga hai jugaa",
                    },
                ],
            },
            {
                commentId: 12,
                commentContent: "Hai juga",
                replies: [
                    {
                        commentId: 121,
                        commentContent: "Haai juga hai jugaa",
                    },
                ],
            },
        ],
    },
    {
        commentId: 2,
        commentContent: "Halooo",
    },
];
function countComments(comments) {
    var count = 0;
    comments.forEach(function (comment) {
        count++;
        if (comment.replies) {
            count += countComments(comment.replies);
        }
    });
    return count;
}
var totalComments = countComments(comments);
console.log("Total komentar: ".concat(totalComments));

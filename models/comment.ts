const commentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    rating: { type: Number, required: true },
    comment: { type: String, required: true }
})

commentSchema.set("toJSON", {
    transform: (document: typeof commentSchema, returnedObject: typeof commentSchema) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    }
})

module.exports = mongoose.model("Comment", commentSchema);
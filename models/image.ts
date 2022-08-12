const imageSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    image: { type: String, required: true },
})

imageSchema.set("toJSON", {
    transform: (document: typeof imageSchema, returnedObject: typeof imageSchema) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    }
})

module.exports = mongoose.model("Image", imageSchema);
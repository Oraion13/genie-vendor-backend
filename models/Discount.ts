const discountSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    discount: { type: Number, required: true },
    exp: { type: String, required: true }
})

discountSchema.set("toJSON", {
    transform: (document: typeof discountSchema, returnedObject: typeof discountSchema) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    }
})

module.exports = mongoose.model("Discount", discountSchema);
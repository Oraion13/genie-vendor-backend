const productInfoSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    key: { type: String, required: true },
    value: { type: String, required: true }
})

productInfoSchema.set("toJSON", {
    transform: (document: typeof productInfoSchema, returnedObject: typeof productInfoSchema) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    }
})

module.exports = mongoose.model("ProductInfo", productInfoSchema);
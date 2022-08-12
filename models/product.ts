const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String },
    price: { type: Number, required: true },
    description: { type: String },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ],
    images: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Image"
        }
    ],
    information: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Information"
    },
    vendor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Vendor"
    },
    discount: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Discount"
    },
    stock: { type: Number }
})

productSchema.set("toJSON", {
    transform: (document: typeof productSchema, returnedObject: typeof productSchema) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    }
})

module.exports = mongoose.model("Product", productSchema);
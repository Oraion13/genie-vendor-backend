const vendorSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    address: { type: String, required: true },
    profilePictre: { type: String },
    followers: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
     },
     products: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
     }
})

vendorSchema.set("toJSON", {
    transform: (document: typeof vendorSchema, returnedObject: typeof vendorSchema) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    }
})

module.exports = mongoose.model("Vendor", vendorSchema);
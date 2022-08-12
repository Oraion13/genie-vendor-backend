const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
})

userSchema.set("toJSON", {
    transform: (document: typeof userSchema, returnedObject: typeof userSchema) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    }
})

module.exports = mongoose.model("User", userSchema);
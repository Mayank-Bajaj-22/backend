// import mongoose from "mongoose";

// const todoSchema = new mongoose.Schema({
//     userName: String,
//     email: String,
//     isActive: Boolean,
// });

// export const Todo = mongoose.model("Todo", todoSchema);

import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    complete: {
        type: Boolean,
        default: false,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    subTodo: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubTodo",
    }] // Array of sub-todos
});

export const Todo = mongoose.model("Todo", todoSchema);

// timestamps will create two fields createdAt and updatedAt automatically
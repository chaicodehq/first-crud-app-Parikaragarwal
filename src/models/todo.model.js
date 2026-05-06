import mongoose from "mongoose";

/**
 * TODO: Define Todo schema
 *
 * Fields:
 * - title: String, required, trim, min 3, max 120 chars
 * - completed: Boolean, default false
 * - priority: Enum ["low", "medium", "high"], default "medium"
 * - tags: Array of Strings, max 10 items, default []
 * - dueDate: Date, optional
 *
 * Options:
 * - Enable timestamps
 * - Add index: { completed: 1, createdAt: -1 }
 */

function tagsLimit(val){
  return val.length<=10;
}

const todoSchema = new mongoose.Schema(
  {
    title:{
      type:String,
      required:true,
      trim:true,
      minLength:3,
      maxLength:120
    },
    completed:{
      type:Boolean,
      default:false,
    },
    priority:{
      type:String,
      enum:["low", "medium", "high"],
      default:'medium'
    },
    tags:{
      type:[String],
      validate:[tagsLimit,`No more tags allowed`],
      default:[]
    },
    dueDate:{
      type:Date,
      required:false
    }
  },
  {
    timestamps:true,
  }
);

todoSchema.index({ completed: 1, createdAt: -1 });


// TODO: Add index

// TODO: Create and export the Todo model

export const Todo = mongoose.model('Todo',todoSchema);

import express from "express";
import {
  createTodo,
  listTodos,
  getTodo,
  updateTodo,
  toggleTodo,
  deleteTodo,
} from "../controllers/todo.controller.js";
import { validateObjectId } from "../middlewares/validateObjectId.middleware.js";

const router = express.Router();

/**
 * TODO: Define routes
 *
 * POST   /              → createTodo
 * GET    /              → listTodos
 * GET    /:id           → getTodo (use validateObjectId middleware)
 * PATCH  /:id           → updateTodo (use validateObjectId middleware)
 * PATCH  /:id/toggle    → toggleTodo (use validateObjectId middleware)
 * DELETE /:id           → deleteTodo (use validateObjectId middleware)
 */

// Your routes here
router.post('/',createTodo);
router.get('/',listTodos);

router.use('/:id',validateObjectId);
router.get("/:id",getTodo);
router.patch('/:id',updateTodo);
router.patch('/:id/toggle',toggleTodo);
router.delete('/:id',deleteTodo);

export default router;

import { Router } from 'express';
import { todoValidation } from '../validation/todo.validation';
import { todoController } from '../controllers/todoController';
import userAuth from '../middleware/auth';
const router = Router();

router.post('/create', userAuth, todoValidation.createTodoSchema, todoController.createTodo);
router.get('/fetch', userAuth, todoController.fetchTodos);
router.put('/update/:id', userAuth, todoValidation.updateTodoSchema, todoController.updateTodo);
router.delete('/delete/:id', userAuth, todoController.deleteTodo);

export default router;

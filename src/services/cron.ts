import cron from 'node-cron';
import emailService from '../services/emailService';
import { todoResources } from '../resources/todoResources';
import { userResources } from '../resources/userResources';

cron.schedule('0 8 * * *', async () => {
  const todos = await todoResources.fetchAllDues({
    setReminder: true,
    completed: false,
    dueDate: {
      $gte: new Date(new Date().setHours(0, 0, 0)), // Today's date (start of day)
      $lt: new Date(new Date().setHours(23, 59, 59)), // Today's date (end of day)
    },
  });
  todos.forEach(async (todo) => {
    const user = await userResources.findUserById(todo.userId);
    await emailService.sendReminderEmail(
      user.email,
      'Todo Reminder',
      `You have a pending todo: ${todo.title} due on ${todo.dueDate}`
    );
  });
});

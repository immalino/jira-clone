"use client";

import { PageErrorPage } from "@/components/page-error";
import { PageLoader } from "@/components/page-loader";
import { useGetTask } from "@/features/tasks/api/use-get-task";
import { TaskBreadcrumbs } from "@/features/tasks/components/task-breadrumbs";
import { useTaskId } from "@/features/tasks/hooks/use-task-id";

const TaskIdClient = () => {
  const taskId = useTaskId();
  const { data: task, isLoading } = useGetTask({ taskId });

  if (isLoading) return <PageLoader />;
  if (!task) return <PageErrorPage message="Task not found" />;
  return (
    <div className="flex flex-col">
      <TaskBreadcrumbs project={task.project} task={task} />
    </div>
  );
};
export default TaskIdClient;

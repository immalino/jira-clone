"use client";

import { DottedSeparator } from "@/components/dotted-separator";
import { PageErrorPage } from "@/components/page-error";
import { PageLoader } from "@/components/page-loader";
import { useGetTask } from "@/features/tasks/api/use-get-task";
import { TaskBreadcrumbs } from "@/features/tasks/components/task-breadrumbs";
import { TaskDescription } from "@/features/tasks/components/task-description";
import { TaskOverview } from "@/features/tasks/components/task-overview";
import { useTaskId } from "@/features/tasks/hooks/use-task-id";

const TaskIdClient = () => {
  const taskId = useTaskId();
  const { data: task, isLoading } = useGetTask({ taskId });

  if (isLoading) return <PageLoader />;
  if (!task) return <PageErrorPage message="Task not found" />;
  return (
    <div className="flex flex-col">
      <TaskBreadcrumbs project={task.project} task={task} />
      <DottedSeparator className="my-6" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <TaskOverview task={task} />
        <TaskDescription task={task} />
      </div>
    </div>
  );
};
export default TaskIdClient;

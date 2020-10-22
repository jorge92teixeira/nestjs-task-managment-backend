import { TaskStatus } from '../task.model';

export class GetTaksFilterDto {
  status: TaskStatus;
  search: string;
}

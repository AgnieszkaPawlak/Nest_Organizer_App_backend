export interface RegisterUserResponse {
  username: string;
  email: string;
}

export interface UpdateUserResponse {
  username: string;
  email: string;
}

export interface CreateTodoResponse {
  title: string;
  description: string;
  deadline: Date;
}

export interface UpdateTodoResponse {
  title: string;
  description: string;
  deadline: Date;
}

export interface CreateEventResponse {
  title: string;
  startDate: Date | null;
  endDate: Date | null;
  colorEvent?: string;
  color?: string;
}

export interface UpdateEventResponse {
  title: string;
  startDate: Date | null;
  endDate: Date | null;
  colorEvent?: string;
  color?: string;
}

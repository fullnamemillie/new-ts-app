export type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

export type TodoState = {
  list: Todo[];
  trashBasketList: Todo[];
  loading: boolean;
  error: string | null;
};

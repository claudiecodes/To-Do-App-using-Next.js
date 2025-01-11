export type Todo = {
  _id: string;
  title: string;
  category: string;
};

export type TodoProps = {
  todos: Todo[];
};

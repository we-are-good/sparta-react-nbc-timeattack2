import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TodoItem from "../components/todo/TodoItem";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodoThunk, toggleTodoThunk } from "../features/todo/todoSlice";
import { getSingleTodo } from "../api/todo-api";

const Detail = () => {
  const { todoId } = useParams();
  const [todo, setTodo] = useState(null);
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo);

  useEffect(() => {
    const getSingleDetailTodo = getSingleTodo(todoId);
    setTodo(getSingleDetailTodo);
  }, [todoId]);

  // TODO: 서버로부터 특정 todo를 가져와 상태에 저장합니다.
  // NOTE - 힌트:
  // - todoId를 사용해 특정 todo를 가져오는 함수를 작성합니다.
  // - 가져온 todo를 상태에 저장합니다.
  // - useEffect 훅을 사용해 todoId가 변경될 때마다 todo를 가져옵니다.

  const handleDeleteTodoItem = async (id) => {
    dispatch(deleteTodoThunk(id));

    // TODO: Redux Toolkit Thunk 함수를 사용하여 서버로부터 특정 todo를 삭제합니다.
    // NOTE - 힌트:
    // - id를 사용해 특정 todo를 삭제하는 Thunk를 dispatch합니다.

    setTodo(null);
  };

  const handleToggleTodoItem = async (id) => {
    dispatch(toggleTodoThunk(id));
    // TODO: Redux Toolkit Thunk 함수를 사용하여 서버로부터 특정 todo의 isDone 상태를 변경합니다.
    // NOTE - 힌트:
    // - id를 사용해 특정 todo의 isDone 상태를 변경하는 Thunk를 dispatch합니다.

    setTodo((prevTodo) => ({
      ...prevTodo,
      isDone: !prevTodo.isDone,
    }));
  };

  if (!todos) {
    return <p>로딩중입니다.</p>;
  }

  // TODO: todo가 없을 경우 로딩 중을 표시합니다.
  // NOTE - 힌트:
  // - todo가 없을 경우 로딩 중을 표시하는 JSX를 반환합니다.

  return (
    <section>
      <TodoItem
        todo={todo}
        onDeleteTodoItem={handleDeleteTodoItem}
        onToggleTodoItem={handleToggleTodoItem}
      />
    </section>
  );
};

export default Detail;

import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import SharedLayout from "./SharedLayout/SharedLayout";

const HomePage = lazy(() => import("../pages/HomePage"));
const CounterPage = lazy(() => import("../pages/CounterPage"));
const TodoPage = lazy(() => import("../pages/TodoPage"));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="todo" element={<TodoPage />} />
        <Route path="counter" element={<CounterPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;

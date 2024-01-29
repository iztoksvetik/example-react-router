import {
  createBrowserRouter,
  RouterProvider,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Routing example</h1>
        <ul>
          <li><Link to="first">First page</Link></li>
          <li><Link to="second">Second page</Link></li>
          <li><Link to="third">Third page</Link></li>
        </ul>
        
      </div>
    ),
  },
  {
    path: "first",
    element: <div>First page</div>,
  },
  {
    path: "second",
    element: <div>Second page</div>,
  },
  {
    path: "third",
    element: <div>Third page</div>,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

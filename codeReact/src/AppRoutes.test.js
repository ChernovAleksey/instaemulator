import AppRoutes from './AppRoutes';
import { render} from "@testing-library/react";
import { Provider} from "react-redux";
import store from "./store/index";
import { BrowserRouter } from "react-router-dom";

const Component = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};
const RenderComponent = () => {
  return (
    <Provider store={store}>
      <Component />
    </Provider>
  );
};
describe("AppRoutes renders", () => {
  test("should AppRoutes match snapshot", () => {
    const { asFragment } = render(<RenderComponent />);
    expect(asFragment()).toMatchSnapshot();
  });
});
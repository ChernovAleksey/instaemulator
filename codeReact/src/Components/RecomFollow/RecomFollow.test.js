import RecomFollow from './RecomFollow';
import { render} from "@testing-library/react";
import { Provider} from "react-redux";
import store from "../../store/index";
import { BrowserRouter } from "react-router-dom";

const Component = () => {
  return (
    <BrowserRouter>
      <RecomFollow />
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
describe("RecomFollow renders", () => {
  test("should RecomFollow match snapshot", () => {
    const { asFragment } = render(<RenderComponent />);
    expect(asFragment()).toMatchSnapshot();
  });
});
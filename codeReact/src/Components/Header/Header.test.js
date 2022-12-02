import Header from './Header';
import { render} from "@testing-library/react";
import { Provider} from "react-redux";
import store from "../../store/index";
import { BrowserRouter } from "react-router-dom";

const Component = () => {
  return (
    <BrowserRouter>
      <Header />
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
describe("Header renders", () => {
  test("should Header match snapshot", () => {
    const { asFragment } = render(<RenderComponent />);
    expect(asFragment()).toMatchSnapshot();
  });
});
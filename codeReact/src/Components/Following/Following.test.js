import Following from './Following';
import { render} from "@testing-library/react";
import { Provider} from "react-redux";
import store from "../../store/index";

const Component = () => {
  return (
    <>
      <Following />
    </>
  );
};
const RenderComponent = () => {
  return (
    <Provider store={store}>
      <Component />
    </Provider>
  );
};
describe("Following renders", () => {
  test("should Following match snapshot", () => {
    const { asFragment } = render(<RenderComponent />);
    expect(asFragment()).toMatchSnapshot();
  });
});
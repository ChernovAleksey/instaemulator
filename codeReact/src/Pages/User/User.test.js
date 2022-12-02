import User from './User';
import { render} from "@testing-library/react";
import { Provider} from "react-redux";
import store from "../../store/index";

const Component = () => {
  return (
    <>
      <User />
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
describe("User renders", () => {
  test("should User match snapshot", () => {
    const { asFragment } = render(<RenderComponent />);
    expect(asFragment()).toMatchSnapshot();
  });
});
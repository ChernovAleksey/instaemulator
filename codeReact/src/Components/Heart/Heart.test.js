import Heart from './Heart';
import { render} from "@testing-library/react";
import { Provider} from "react-redux";
import store from "../../store/index";

const Component = () => {
  return (
    <>
      <Heart />
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
describe("Heart renders", () => {
  test("should Heart match snapshot", () => {
    const { asFragment } = render(<RenderComponent />);
    expect(asFragment()).toMatchSnapshot();
  });
});
import Posts from './Posts';
import { render} from "@testing-library/react";
import { Provider} from "react-redux";
import store from "../../store/index";

const Component = () => {
  return (
    <>
      <Posts />
    </>
  );
};
const RenderComponent = () => {
  return (
    <Provider store={store}>
      <Posts />
    </Provider>
  );
};
describe("Posts renders", () => {
  test("should Posts match snapshot", () => {
    const { asFragment } = render(<RenderComponent />);
    expect(asFragment()).toMatchSnapshot();
  });
});
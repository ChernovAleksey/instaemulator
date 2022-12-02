import UserPostCard from './UserPostCard';
import { render} from "@testing-library/react";
import { Provider} from "react-redux";
import store from "../../store/index";
import { BrowserRouter } from "react-router-dom";

const Component = () => {
  return (
    <>
      <UserPostCard />
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
describe("UserPostCard renders", () => {
  test("should UserPostCard match snapshot", () => {
    const { asFragment } = render(<RenderComponent />);
    expect(asFragment()).toMatchSnapshot();
  });
});
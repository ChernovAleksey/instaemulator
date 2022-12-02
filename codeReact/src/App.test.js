import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from './store'

const Component =() =>{
    return (
        <Provider store={store}>
            <BrowserRouter>
            <App />
            </BrowserRouter>
    </Provider>
)}
describe('App renders',()=>{

test('should App match snapshot',()=>{
const {asFragment } = render(<Component/>)
expect(asFragment()).toMatchSnapshot()

})

})
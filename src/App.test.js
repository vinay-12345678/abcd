import { render, screen } from '@testing-library/react';
import Textbox from "./Components/Textbox";
import userEvent from '@testing-library/user-event';


test('renders learn react link',() => {
  render(<Textbox />);
  
  userEvent.type(screen.getByRole("textbox"),"abc");
  userEvent.click(screen.getByText('Add'));
  const paragraph=screen.getByTestId("row-0");
  
  console.log(paragraph.textContent);


});
import { render, screen } from '@testing-library/react';
import Textbox from "./Components/Textbox";
import userEvent from '@testing-library/user-event';


test('renders learn react link',() => {
  render(<Textbox />);
  
  userEvent.type(screen.getByRole("textbox"),"abc");
  userEvent.click(screen.getByText('Add'));
  const paragraph=screen.getByTestId("row-0");
  
  expect(paragraph).toHaveTextContent("abc");
  const textbox=screen.getByRole("textbox");
  expect(textbox).toHaveTextContent("");
});

test('renders learn react link',() => {
  render(<Textbox />);
  
  userEvent.type(screen.getByRole("textbox"),"abc");
  userEvent.click(screen.getByText('Add'));
  userEvent.type(screen.getByRole("textbox"),"DEF");
  userEvent.click(screen.getByText('Add'));
  const paragraph=screen.getByTestId("row-0");
  expect(paragraph).toHaveTextContent("abc");

  const paragraphh=screen.getByTestId("row-1");
  expect(paragraphh).toHaveTextContent("DEF");

  const textbox=screen.getByRole("textbox");
  expect(textbox).toHaveTextContent("");

});


test('renders learn react link',() => {
  render(<Textbox />);
  
  userEvent.type(screen.getByRole("textbox"),"abc");
  userEvent.click(screen.getByText('Add'));
  userEvent.type(screen.getByRole("textbox"),"Def");
  userEvent.click(screen.getByText('Add'));
  userEvent.type(screen.getByRole("textbox"),"jhsgdJ");
  userEvent.click(screen.getByText('Add'));

  const paragraph=screen.getByTestId("row-0");
  expect(paragraph).toHaveTextContent("abc");

  const paragraphh=screen.getByTestId("row-1");
  expect(paragraphh).toHaveTextContent("Def");

  const paragraphhh=screen.getByTestId("row-2");
  expect(paragraphhh).toHaveTextContent("jhsgdJ");

  const textbox=screen.getByRole("textbox");
  expect(textbox).toHaveTextContent("");

});

test('renders learn react link',() => {
  render(<Textbox />);
  
  userEvent.type(screen.getByRole("textbox"),"abc");
  userEvent.click(screen.getByText('Clear'));
  const textbox=screen.getByRole("textbox");
  expect(textbox).toHaveTextContent("");

});


// test('renders learn react link',() => {
//   render(<Textbox />);
  
//   userEvent.type(screen.getByRole("textbox"),"hguygu  uygyu yg uy");
//   userEvent.click(screen.getByText('Add'));
//   const paragraph=screen.getByTestId("row-0");
  
//   console.log(paragraph.textContent);


// });

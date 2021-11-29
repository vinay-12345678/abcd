import { render, screen } from '@testing-library/react';
import Textbox from "./Components/Textbox";
import userEvent from '@testing-library/user-event';


test('testing add button functionality and table column with index 0',() => {
  render(<Textbox />);
  
  userEvent.type(screen.getByRole("textbox"),"abc");
  userEvent.click(screen.getByText('Add'));
  const paragraph=screen.getByTestId("row-0");
  expect(paragraph).toHaveTextContent("abc");

  const textbox=screen.getByRole("textbox");
  expect(textbox).toHaveTextContent("");
});

test('testing add button functionality and table column with index 0 and index 1',() => {
  render(<Textbox />);
  
  userEvent.type(screen.getByRole("textbox"),"abc");
  userEvent.click(screen.getByText('Add'));
  userEvent.type(screen.getByRole("textbox"),"DEF");
  userEvent.click(screen.getByText('Add'));
  const paragraph=screen.getByTestId("row-0");
  expect(paragraph).toHaveTextContent("abc");

  const nextParagraph=screen.getByTestId("row-1");
  expect(nextParagraph).toHaveTextContent("DEF");

  const textbox=screen.getByRole("textbox");
  expect(textbox).toHaveTextContent("");

});


test('testing add button functionality and table column with index 0 and index 1 and index 2',() => {
  render(<Textbox />);
  
  userEvent.type(screen.getByRole("textbox"),"abc");
  userEvent.click(screen.getByText('Add'));
  userEvent.type(screen.getByRole("textbox"),"Def");
  userEvent.click(screen.getByText('Add'));
  userEvent.type(screen.getByRole("textbox"),"jhsgdJ");
  userEvent.click(screen.getByText('Add'));

  const paragraph=screen.getByTestId("row-0");
  expect(paragraph).toHaveTextContent("abc");

  const nextParagraph=screen.getByTestId("row-1");
  expect(nextParagraph).toHaveTextContent("Def");

  const finalParagraph=screen.getByTestId("row-2");
  expect(finalParagraph).toHaveTextContent("jhsgdJ");

  const textbox=screen.getByRole("textbox");
  expect(textbox).toHaveTextContent("");

});



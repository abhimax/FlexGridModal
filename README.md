# FlexBoxGridModal

## Modal Resizing Behavior Demo

This project demonstrates a modal resizing behavior based on the content of a line item list. The modal automatically adjusts its size and the number of columns to display based on the content's width.

### Table of Contents

<!-- - Demo -->

- Installation
- Usage
- Dependencies

<!-- ## Demo
Include a GIF or a screenshot here that demonstrates your modal resizing behavior in action.

https://github.com/abhimax/FlexGridModal.git -->

### Installation

1. Clone this repository to your local machine:
   https://github.com/abhimax/FlexGridModal.git
2. Navigate to the project directory:
   cd FlexGridModal
3. Install project dependencies:
   npm install

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Usage

1. Start the development server:
   npm run dev
2. Open your web browser and go to http://localhost:5174/ to see the demo in action.

## How It Works

The useEffect hook in the ModalComponent component detects if the modal content overflows its container. If an overflow is detected, the modal's size and the number of columns are adjusted to fit the content.

The lineItemList prop passed to the ModalComponent is used to determine the content's width. If the content's scroll width is greater than its client width, the modal size and columns are updated incrementally.

## Dependencies

React: https://reactjs.org/
Vite: https://vitejs.dev/

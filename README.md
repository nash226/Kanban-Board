# Kanban Board

A simple, lightweight Kanban board built with plain JavaScript, HTML and CSS. This project provides a minimal drag-and-drop interface for managing lists (columns) and cards (tasks). It's ideal as a learning project or a starter for a more feature-rich task board.

Demo
- https://nash226.github.io/Kanban-Board/

Key features
- Add, edit, and delete cards (tasks).
- Drag-and-drop cards between columns and reorder within a column.
- Persistent board state using localStorage (no backend required).
- Responsive layout that works on desktop and tablet; degrades gracefully on small screens.
- Small and dependency-free — easy to customize.

Built with
- JavaScript (ES6+)
- HTML5
- CSS3 (Flexbox / Grid)

Getting started

Prerequisites
- A modern web browser (Chrome, Firefox, Edge, Safari)
- (Optional) Node.js/npm if you want to run a local static server or integrate build tooling

Quick start (static)
1. Clone the repository:
   ```bash
   git clone https://github.com/nash226/Kanban-Board.git
   cd Kanban-Board
   ```
2. Open `index.html` in your browser.

Run a simple local server (recommended)
- Using npm package http-server:
  ```bash
  npm install -g http-server
  http-server . -c-1
  ```
  Then open http://localhost:8080 (or the address http-server prints).

- Or using the VS Code "Live Server" extension: right click `index.html` → "Open with Live Server".

Project structure (example)
- index.html — app entry
- assets/ — images, icons, example screenshots
- css/ — stylesheets
- js/ — JavaScript source files (drag/drop, storage, UI)
- README.md — this file

Usage
- Add a new column using the "Add column" control.
- Add cards to a column using the "Add card" button or form.
- Drag a card by its header or drag handle and drop into another column or a different position.
- Click a card to edit its title/description (if implemented).
- Board state is saved automatically; clearing localStorage will reset the board to its default state.

Customizing
- Styles: edit files in css/ (variables and layout are grouped for easy theming).
- Storage: replace localStorage logic in js/storage.js with an API call to persist boards to a server.
- Columns & cards: structure is intentionally simple — adjust data shape in js/data.js to extend metadata (due dates, labels, members).

Accessibility notes
- Keyboard interactions and ARIA labels should be verified and improved based on your target users. The base project aims for reasonable defaults but may need enhancements for full WCAG compliance.

Testing
- Manual testing via the browser is sufficient for this project. If you add JS unit tests, consider using Jest or similar tooling.

Contributing
Contributions are welcome. Suggested workflow:
1. Fork the repository.
2. Create a feature branch: `git checkout -b feat/my-feature`.
3. Make changes and commit: `git commit -am "Add my feature"`.
4. Push and open a Pull Request.

Please include:
- A clear description of what you changed and why.
- Screenshots or animated GIFs for UI changes.
- Notes about backward-incompatible changes, if any.

Roadmap / Ideas
- Add user accounts and multi-user sync (backend/API).
- Card due dates, labels, comments, and attachments.
- Board templates and import/export (JSON).
- Keyboard-only drag-and-drop / improved accessibility.
- Mobile-first optimizations and touch improvements.

License
This project is provided under the MIT License — see LICENSE for details (or add an appropriate license file).

Contact
- Maintainer: nash226
- GitHub: https://github.com/nash226/Kanban-Board

Acknowledgements
- Inspired by classic Kanban tools and simple frontend project patterns.
- Drag-and-drop uses the HTML5 Drag and Drop API (or a small custom implementation) — credit any third-party libraries used if you add them.

Replace or expand any sections above to match the actual implemented features and assets in this repository.
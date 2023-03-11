import {rectangles} from './mocks.js'

// Function to generate HTML table
function generateTable(rectangles) {
  // Determine table dimensions
  let tableWidth = 0;
  let tableHeight = 0;
  rectangles.forEach(rectangle => {
    if (rectangle.bottomRight.x > tableWidth) {
      tableWidth = rectangle.bottomRight.x;
    }
    if (rectangle.bottomRight.y > tableHeight) {
      tableHeight = rectangle.bottomRight.y;
    }
  });

  // Create table element
  const table = document.createElement('table');

  // Create table rows and cells with colored backgrounds
  for (let i = 0; i < tableHeight; i++) {
    const row = document.createElement('tr');
    for (let j = 0; j < tableWidth; j++) {
      let cellColor = 'white';
      rectangles.forEach(rectangle => {
        if (j >= rectangle.topLeft.x && j <= rectangle.bottomRight.x &&
            i >= rectangle.topLeft.y && i <= rectangle.bottomRight.y) {
          cellColor = rectangle.color;
        }
      });
      const cell = document.createElement('td');
      cell.style.backgroundColor = cellColor;
      row.appendChild(cell);
    }
    table.appendChild(row);
  }

  return table;
}

// Example usage
const tableContainer = document.getElementById('table-container');
const table = generateTable(rectangles);
tableContainer.appendChild(table);

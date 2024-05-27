"use strict";
const table = document.querySelector("table");
for (const row of table.rows){
    const clonedRow = row.cells[1].cloneNode(true);
    row.insertBefore(clonedRow, row.cells[row.cells.length - 1]);
}

//# sourceMappingURL=index.f75de5e1.js.map

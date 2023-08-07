function solution(wallpaper) {
    let column = [];
    let minRow = new Set();
    let maxRow = new Set();
    wallpaper.forEach((e, index) => {
        if (e.includes("#")) column.push(index);
        minRow.add(e.indexOf("#"));
        maxRow.add(e.lastIndexOf("#"));
    })
    minRow = Array.from(minRow)
    maxRow = Array.from(maxRow)
    minRow.sort((a, b) => a - b);
    maxRow.sort((a, b) => a - b);
    minY = column[0];
    minRow[0] !== -1 ? minX = minRow[0] : minX = minRow[1];
    maxY = column[column.length - 1] + 1;
    maxX = maxRow[maxRow.length - 1] + 1;
    return [minY, minX, maxY, maxX];
}
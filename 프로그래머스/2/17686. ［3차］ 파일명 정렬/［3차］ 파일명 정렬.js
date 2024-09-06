function solution(files) {
    files.sort((a, b) => {
        const [aHead, aNumber] = parseFileName(a);
        const [bHead, bNumber] = parseFileName(b);

        return aHead.localeCompare(bHead) || aNumber - bNumber;
    });
    return files;
}

function parseFileName(file) {
    const match = file.match(/^([^\d]+)(\d{1,5})/);
    const head = match ? match[1].toLowerCase() : "";
    const number = match ? parseInt(match[2], 10) : 0;
    return [head, number];
}
export default function createIteratorObject(reportObject) {
  const result = [];
  for (const idx of Object.values(reportObject.allEmployees)) {
    result.push(...idx);
  }
  return result;
}

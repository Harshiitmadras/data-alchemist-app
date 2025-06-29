export function parseCSV(file: File): Promise<any[]> {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = () => {
      const text = reader.result as string;
      const rows = text.trim().split('\n').map(row => row.split(','));
      resolve(rows);
    };
    reader.readAsText(file);
  });
}
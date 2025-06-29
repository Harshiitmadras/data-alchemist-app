export function validateData(data: any[]): string[] {
  const errors: string[] = [];
  if (!data || data.length < 2) {
    errors.push('Not enough rows.');
  }
  if (data[0].length < 3) {
    errors.push('Expected at least 3 columns.');
  }
  return errors;
}
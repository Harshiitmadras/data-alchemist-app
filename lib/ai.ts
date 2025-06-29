export function suggestAIEnhancements(data: any[]): string {
  if (!data || data.length < 2) return '';
  const headers = data[0];
  if (headers.includes('PriorityLevel')) {
    return 'You could prioritize clients by PriorityLevel to assign tasks more effectively.';
  }
  return 'Try including a PriorityLevel column for enhanced rule logic.';
}
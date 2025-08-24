export function formatDuration(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
  
    const hoursStr = hours > 0 ? `${hours}h` : '';
    const minutesStr = minutes > 0 ? `${minutes}m` : '';
  
    return `${hoursStr} ${minutesStr}`.trim();
}
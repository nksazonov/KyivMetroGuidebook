export function useSelecting(selecting) {
  switch (selecting) {
    case 'from':
      return 'Звідки';

    case 'to':
      return 'Куди'
  
    default:
      return 'ERROR: Unknown selecting!'
  }
}
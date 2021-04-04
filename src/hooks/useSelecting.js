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

export function getSelectionFunc(selecting, fromFunc, toFunc) {
  switch (selecting) {
    case 'from':
      return fromFunc;

    case 'to':
      return toFunc;
  
    default:
      return;
  }
}
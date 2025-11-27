import { useRef, useCallback } from 'react';
import { BottomSheetModal } from '@gorhom/bottom-sheet';

export function useBottomSheet() {
  const ref = useRef<BottomSheetModal>(null);

  const open = useCallback(() => {
    ref.current?.present();
  }, []);

  const close = useCallback(() => {
    ref.current?.dismiss();
  }, []);

  const snapToIndex = useCallback((index: number) => {
    ref.current?.snapToIndex(index);
  }, []);

  return {
    ref,
    open,
    close,
    snapToIndex,
  };
}

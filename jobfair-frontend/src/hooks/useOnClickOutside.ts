import { RefObject, useEffect } from 'react';

type Handler = (event: MouseEvent | TouchEvent) => void;

export default function useOnClickOutside(ref: RefObject<HTMLElement>, handler: Handler) {
  useEffect(() => {
    const listener: EventListener = (event: Event) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler(event as MouseEvent | TouchEvent);
    };

    // Add event listeners for mousedown and touchstart
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    // Return cleanup function to remove event listeners
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}
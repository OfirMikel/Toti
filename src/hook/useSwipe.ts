import { useState, useEffect, useCallback } from 'react';

interface SwipePosition {
    startX: number;
    startY: number;
    endX: number;
    endY: number;
}

interface SwipeHookResult {
    swipeDirection: 'left' | 'right' | 'none';
    swipeDistance: number;
}

export const useSwipe = (
    minSwipeDistance = 50,
    maxVerticalDeviation = 50
): SwipeHookResult => {
    const [swipeDirection, setSwipeDirection] = useState<'left' | 'right' | 'none'>('none');
    const [swipeDistance, setSwipeDistance] = useState(0);

    const handleTouchStart = useCallback((e: TouchEvent) => {
        const touch = e.touches[0];
        const position: SwipePosition = {
            startX: touch.clientX,
            startY: touch.clientY,
            endX: touch.clientX,
            endY: touch.clientY
        };

        const handleTouchMove = (moveEvent: TouchEvent) => {
            const currentTouch = moveEvent.touches[0];
            position.endX = currentTouch.clientX;
            position.endY = currentTouch.clientY;
        };

        const handleTouchEnd = () => {
            const horizontalDistance = position.endX - position.startX;
            const verticalDistance = Math.abs(position.endY - position.startY);

            // Check if swipe is significant and mostly horizontal
            if (
                Math.abs(horizontalDistance) >= minSwipeDistance &&
                verticalDistance <= maxVerticalDeviation
            ) {
                const direction = horizontalDistance > 0 ? 'right' : 'left';
                setSwipeDirection(direction);
                setSwipeDistance(Math.abs(horizontalDistance));
            } else {
                setSwipeDirection('none');
                setSwipeDistance(0);
            }

            // Clean up event listeners
            document.removeEventListener('touchmove', handleTouchMove);
            document.removeEventListener('touchend', handleTouchEnd);
        };

        // Add event listeners
        document.addEventListener('touchmove', handleTouchMove);
        document.addEventListener('touchend', handleTouchEnd);
    }, [minSwipeDistance, maxVerticalDeviation]);

    useEffect(() => {
        // Add touch start listener
        document.addEventListener('touchstart', handleTouchStart);

        // Cleanup
        return () => {
            document.removeEventListener('touchstart', handleTouchStart);
        };
    }, [handleTouchStart]);

    return { swipeDirection, swipeDistance };
};
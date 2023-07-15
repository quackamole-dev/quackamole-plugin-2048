import { ActionType } from '../types/ActionType';
export function resetAction(size = 4) {
    return {
        type: ActionType.RESET,
        value: size,
    };
}
export function undoAction() {
    return {
        type: ActionType.UNDO,
    };
}
export function moveAction(direction) {
    return {
        type: ActionType.MOVE,
        value: direction,
    };
}
export function dismissAction() {
    return {
        type: ActionType.DISMISS,
    };
}

import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../state';

// return useSelector with types of RootState
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

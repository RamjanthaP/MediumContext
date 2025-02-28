import { ReactNode, RefObject, createContext, useCallback, useContext, useRef, useState } from "react";

export interface StickyContextState {
    isSticky: boolean;
    displayHeaderLogo: boolean
    refHeader: RefObject<HTMLElement> | null
}

export interface StickyContextValue extends StickyContextState {
    stick: () => void;
    unstick: () => void;
    showHeaderLogo: () => void,
    hideHeaderLogo: () => void,
}

const initialContextValue: StickyContextValue = {
    isSticky: false,
    displayHeaderLogo: true,
    stick: () => { },
    unstick: () => { },
    showHeaderLogo: () => { },
    hideHeaderLogo: () => { },
    refHeader: null
};

export const StickyContext = createContext<StickyContextValue>(initialContextValue);

interface StickyProviderProps {
    children: ReactNode;
    initialState?: Pick<StickyContextState, 'isSticky' | 'displayHeaderLogo'>;
}

export const StickyProvider: React.FC<StickyProviderProps> = ({
    children,
    initialState = { isSticky: false, displayHeaderLogo: true }
}) => {
    const [isSticky, setIsSticky] = useState<boolean>(initialState.isSticky);
    const [displayHeaderLogo, setDisplayHeaderLogo] = useState<boolean>(initialState.displayHeaderLogo);

    // Memoize callbacks to prevent unnecessary re-renders
    const stick = useCallback(() => setIsSticky(true), []);
    const unstick = useCallback(() => setIsSticky(false), []);
    const showHeaderLogo = useCallback(() => setDisplayHeaderLogo(true), []);
    const hideHeaderLogo = useCallback(() => setDisplayHeaderLogo(false), []);
    const refHeader = useRef<HTMLElement>(null);

    const value = {
        displayHeaderLogo,
        showHeaderLogo,
        hideHeaderLogo,
        isSticky,
        stick,
        unstick,
        refHeader

    } as const;  // Use const assertion for better type inference

    return (
        <StickyContext.Provider value={value}>
            {children}
        </StickyContext.Provider>
    );
};

export const useStickyContext = (): StickyContextValue => {
    const context = useContext(StickyContext);

    if (context === undefined) {  // Check for undefined specifically
        throw new Error('useStickyContext must be used within a StickyProvider');
    }

    return context;
};


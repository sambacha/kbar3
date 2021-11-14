import * as React from 'react';
import { ReactElement, JSXElementConstructor, ReactNode } from 'react';

interface Props$1 {
    children: React.ReactNode;
}
declare function KBarPortal(props: Props$1): JSX.Element | null;

interface Props {
    children: React.ReactNode;
    className?: string;
}
declare function KBarPositioner(props: Props): JSX.Element;

declare const KBAR_LISTBOX = "kbar-listbox";
declare const getListboxItemId: (id: number) => string;
declare function KBarSearch(props: React.InputHTMLAttributes<HTMLInputElement>): JSX.Element;

declare type ActionId = string;
interface BaseAction {
    id: ActionId;
    name: string;
    shortcut?: string[];
    keywords?: string;
    section?: string;
    icon?: string | React.ReactElement | React.ReactNode;
    subtitle?: string;
    perform?: () => void;
    parent?: ActionId;
}
declare type Action = Omit<BaseAction, "parent"> & {
    parent?: ActionImpl;
    children?: ActionImpl[];
};
declare type ActionTree = Record<string, ActionImpl>;
interface ActionGroup {
    name: string;
    actions: ActionImpl[];
}
interface KBarOptions {
    animations?: {
        enterMs?: number;
        exitMs?: number;
    };
    /**
     * `disableScrollBarManagement` ensures that kbar will not
     * manipulate the document's `margin-right` property when open.
     * By default, kbar will add additional margin to the document
     * body when opened in order to prevent any layout shift with
     * the appearance/disappearance of the scrollbar.
     */
    disableScrollbarManagement?: boolean;
    callbacks?: {
        onOpen?: () => void;
        onClose?: () => void;
        onQueryChange?: (searchQuery: string) => void;
        onSelectAction?: (action: ActionImpl) => void;
    };
}
interface KBarProviderProps {
    actions: BaseAction[];
    options?: KBarOptions;
}
interface KBarState {
    searchQuery: string;
    visualState: VisualState;
    actions: ActionTree;
    currentRootActionId?: ActionId | null;
    activeIndex: number;
}
interface KBarQuery {
    setCurrentRootAction: (actionId?: ActionId | null) => void;
    setVisualState: (cb: ((vs: VisualState) => VisualState) | VisualState) => void;
    setSearch: (search: string) => void;
    registerActions: (actions: BaseAction[]) => () => void;
    toggle: () => void;
    setActiveIndex: (cb: number | ((currIndex: number) => number)) => void;
}
interface IKBarContext {
    getState: () => KBarState;
    query: KBarQuery;
    subscribe: (collector: <C>(state: KBarState) => C, cb: <C>(collected: C) => void) => void;
    options: KBarOptions;
}
declare enum VisualState {
    animatingIn = "animating-in",
    showing = "showing",
    animatingOut = "animating-out",
    hidden = "hidden"
}

interface ActionImplOptions {
    parent?: ActionImpl;
}
declare class ActionImpl implements Action {
    id: string;
    name: string;
    shortcut?: string[] | undefined;
    keywords?: string | undefined;
    perform?: (() => void) | undefined;
    section?: string | undefined;
    icon?: ReactElement<any, string | JSXElementConstructor<any>> | ReactNode;
    subtitle?: string | undefined;
    parent?: ActionImpl;
    children: ActionImpl[];
    constructor(action: BaseAction, options?: ActionImplOptions);
    addChild(action: ActionImpl): void;
    removeChild(action: ActionImpl): void;
    static fromJSON(action: BaseAction, options?: ActionImplOptions): ActionImpl;
}

interface RenderParams<T = ActionImpl | string> {
    item: T;
    active: boolean;
}
interface KBarResultsProps {
    items: any[];
    onRender: (params: RenderParams) => React.ReactElement;
    maxHeight?: number;
}
declare const KBarResults: React.FC<KBarResultsProps>;

interface BaseKBarReturnType {
    query: KBarQuery;
    options: KBarOptions;
}
declare type useKBarReturnType<S = null> = S extends null ? BaseKBarReturnType : S & BaseKBarReturnType;
declare function useKBar<C = null>(collector?: (state: KBarState) => C): useKBarReturnType<C>;

declare function useRegisterActions(actions: BaseAction[], dependencies?: React.DependencyList): void;

declare function createAction(params: Omit<BaseAction, "id">): BaseAction;

declare function useMatches(): ActionGroup[];

declare function useDeepMatches(): {
    results: (string | ActionImpl)[];
    rootActionId: string | null | undefined;
};

declare const KBarContext: React.Context<IKBarContext>;
declare const KBarProvider: React.FC<KBarProviderProps>;

interface KBarAnimatorProps {
    style?: React.CSSProperties;
    className?: string;
}
declare const KBarAnimator: React.FC<KBarAnimatorProps>;

export { Action, ActionGroup, ActionId, ActionTree, BaseAction, IKBarContext, KBAR_LISTBOX, KBarAnimator, KBarContext, KBarOptions, KBarPortal, KBarPositioner, KBarProvider, KBarProviderProps, KBarQuery, KBarResults, KBarSearch, KBarState, VisualState, createAction, getListboxItemId, useDeepMatches, useKBar, useMatches, useRegisterActions };

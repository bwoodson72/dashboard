import React from "react";

export type Customer ={
 name: string|number,
email: string,
phone: string|number,
address: string,
}

export type Order ={
    id: string|number,
    customer: Customer,
    date: string,
    total: number,
    status: string,
}

export type Product ={
    id: string|number,
    name: string,
    price: number,
    quantity: number,
    category: string,
    description: string,
}


// TypeScript

//React Component Types
export type Component={
    Component: React.JSX.Element;

}

// Basic children prop
export type WithChildren = {
    children?: React.ReactNode;
};

// Strict children (required)
export type WithRequiredChildren = {
    children: React.ReactNode;
};

// Optional className prop
export type WithClassName = {
    className?: string;
};

// Common id prop
export type WithId = {
    id: string;
};

// Polymorphic component props (as prop with ref support)
export type PolymorphicProps<E extends React.ElementType, P = {}> = P & {
    as?: E;
} & Omit<React.ComponentPropsWithoutRef<E>, keyof P | 'as'>;

export type PolymorphicComponentPropsWithRef<
    E extends React.ElementType,
    P = {}
> = P &
    Omit<React.ComponentPropsWithoutRef<E>, keyof P | 'as'> & {
    as?: E;
    ref?: React.ComponentPropsWithRef<E>['ref'];
};

// Event handler helpers
export type ClickHandler = React.MouseEventHandler;
export type FormSubmitHandler = React.FormEventHandler<HTMLFormElement>;
export type ChangeHandler = React.ChangeEventHandler<HTMLInputElement>;

// Async action/callbacks
export type VoidFn = () => void;
export type AsyncVoidFn = () => Promise<void>;

// State setter type helper
export type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

// Props for a controlled boolean
export type ControlledBoolean = {
    value: boolean;
    onChange: (value: boolean) => void;
};

// Loadable state wrapper
export type Loadable<T> =
    | { status: 'idle' }
    | { status: 'loading' }
    | { status: 'success'; data: T }
    | { status: 'error'; error: unknown };

// Generic FC signature without React.FC (explicit children optional)
export type FCWithProps<P = {}> = (props: P) => React.JSX.Element;

// Page component types (Next.js)
export type PageProps<P = {}> = P & { params?: Record<string, string>; searchParams?: Record<string, string> };
export type PageComponent<P = {}> = (props: PageProps<P>) => React.JSX.Element;

// Utility: Deep partial for test defaults
export type DeepPartial<T> = {
    [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};
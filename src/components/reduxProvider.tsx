'use client'
import React from "react";
import { Provider } from "react-redux";




/**
 * A component that provides the Redux store to its child components.
 *
 * @param {Object} props - The properties object.
 * @param {any} props.children - The child components to be rendered within the provider.
 * @param {any} props.store - The Redux store to be provided to the child components.
 * @return {React.JSX.Element} The provider component wrapping the child components with the given Redux store.
 */
export function ReduxProvider({ children, store }: any): React.JSX.Element { return <Provider store={store}>{children}</Provider> }
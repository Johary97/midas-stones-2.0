"use client";

import { store } from "@stores/store";
import { Provider } from "react-redux";
import React from "react";
import { StoreContext } from "@stores/context";

export function ReduxProvider({ children }) {
  return (
    <Provider store={store} context={StoreContext}>
      {children}
    </Provider>
  );
}

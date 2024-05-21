import React, { createContext } from 'react';

// export const CountryContext = createContext(null);
export const CountryContext = createContext<string | null>(null);
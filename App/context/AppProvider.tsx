import React, { createContext, useState } from 'react';

export const AppContext = createContext(null);

const { Provider } = AppContext;

const AppProvider: React.FC = ({ children }) => {
    const [state, setState] = useState({
        difficulty: 0,
        timer: 30,
        customText: '',
    });

    return <Provider value={[state, setState]}>{children}</Provider>;
};

AppProvider.context = AppContext;

export default AppProvider;
//=============== Before ========================
// import { createStore } from 'redux';
// import { devToolsEnhancer } from '@redux-devtools/extension';
// import { rootReducer } from './reducer';

// const enhancer = devToolsEnhancer();
// export const store = createStore(rootReducer, enhancer);

//=============== After ========================

// import { rootReducer } from './reducers';

import { configureStore } from '@reduxjs/toolkit';
import { tasksReducer } from './tasksSlice';
import { filtersReducer } from './filtersSlice';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
  },
});

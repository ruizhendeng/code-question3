import React, { useState } from 'react';
import { Provider, useDispatch } from 'react-redux';
import store from './store';
import TreeSelectComponent from './components/TreeSelectComponent';
import { fetchCategoriesRequest } from './actions/categoryActions';
import useFetchCategories from './hooks/useFetchCategories';
import 'antd/dist/reset.css';

const App = () => {
  // Get the dispatch function from Redux
  const dispatch = useDispatch();
  // State to toggle between saga and custom hook for fetching data
  const [useCustomHook, setUseCustomHook] = useState(false);
  // Handler to fetch categories using Redux Saga
  const handleSagaFetch = () => {
    console.log('Fetch with Redux Saga button clicked');
    setUseCustomHook(false);
    dispatch(fetchCategoriesRequest());
  };
  // Handler to fetch categories using the custom hook
  const handleHookFetch = () => {
    console.log('Fetch with Hook button clicked');
    setUseCustomHook(true);
  };

  useFetchCategories(useCustomHook);
  // Handler for when a category is selected
  const handleChange = (value) => {
    alert(`Selected Category ID: ${value}`);
  };

  return (
    <Provider store={store}>
      <div style={{ margin: '50px' }}>
        <h1>Category Selector</h1>
        <button onClick={handleSagaFetch}>Fetch with Redux Saga</button>
        <button onClick={handleHookFetch}>Fetch with Custom Hook</button>
        <TreeSelectComponent onChange={handleChange} />
      </div>
    </Provider>
  );
};

export default App;

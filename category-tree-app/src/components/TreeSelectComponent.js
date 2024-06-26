import React, { useEffect } from 'react';
import { TreeSelect } from 'antd';
import { useSelector } from 'react-redux';

const { TreeNode } = TreeSelect;

const TreeSelectComponent = ({ onChange }) => {
    // Get categories from Redux store
    const categories = useSelector((state) => state.category.categories);
    // Log categories whenever they update
    useEffect(() => {
        console.log('Categories updated:', categories);
    }, [categories]);
    // Function to recursively render tree nodes
    const renderTreeNodes = (data) => {
        if (!Array.isArray(data)) return null;
        // Map over data to create tree nodes
        return data.map((item) => {
            if (item.children && item.children.length > 0) {
                return (
                    <TreeNode title={item.name} value={item.categoryId} key={item.categoryId}>
                        {renderTreeNodes(item.children)}
                    </TreeNode>
                );
            }
            // Render leaf node
            return <TreeNode key={item.categoryId} title={item.name} value={item.categoryId} />;
        });
    };
    // Render the TreeSelect component with tree nodes
    return (
        <TreeSelect
            showSearch
            style={{ width: '100%' }}
            dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
            placeholder="Please select"
            allowClear
            treeDefaultExpandAll
            onChange={onChange}
        >
            {renderTreeNodes(categories.children || [])} { }
        </TreeSelect>
    );
};

export default TreeSelectComponent;

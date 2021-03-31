import React from 'react';

import { useDispatch } from 'react-redux';

import { Toast, Util } from '@lib';

import { Text, Dnd2Column } from '@component';

import { addInterest, updateInterest, deleteInterestData } from '../../../../redux/core/actions';

// import styles from './skills.module.scss';

function Interests(props) {
    const dispatch = useDispatch();

    const _updateInterest = (data) => {
        const storeReorder = Util.mapOrder(props.data, data, 'id');
        dispatch(updateInterest(storeReorder));
    };

    const _addNewItem = () => {
        dispatch(addInterest());
    };

    const _removeItem = (id, data) => {
        Toast.showUndo(id, data, 'interests', 'Interests Item Removed');
        dispatch(deleteInterestData(id));
    };

    const { data } = props;
    return (
        <Dnd2Column
            data={data}
            reorder={(e) => _updateInterest(e)}
            additem={_addNewItem}
            removeitem={(e) => _removeItem(e, data)}
            renderItem={(item) => (
                <div style={{ background: '#fff' }}>
                    <Text value={item.title} statename="interests.title" stateid={item.id} placeholder="Reading Tech Article" />
                </div>
            )}
        />
    );
}

/* Export Component =============================== */
export default Interests;

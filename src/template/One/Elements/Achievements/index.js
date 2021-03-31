import React from 'react';

import { useDispatch } from 'react-redux';

import { Toast, Util } from '@lib';

import { Text, Dnd2Column } from '@component';

import { addAchievement, updateAchievement, deleteAchievementData } from '../../../../redux/core/actions';

// import styles from './skills.module.scss';

function Achievements(props) {
    const dispatch = useDispatch();

    const _updateAchievement = (data) => {
        const storeReorder = Util.mapOrder(props.data, data, 'id');
        dispatch(updateAchievement(storeReorder));
    };

    const _addNewItem = () => {
        dispatch(addAchievement());
    };

    const _removeItem = (id, data) => {
        Toast.showUndo(id, data, 'achievements', 'Certification Item Removed');
        dispatch(deleteAchievementData(id));
    };

    const { data } = props;
    return (
        <Dnd2Column
            data={data}
            reorder={(e) => _updateAchievement(e)}
            additem={_addNewItem}
            removeitem={(e) => _removeItem(e, data)}
            renderItem={(item) => (
                <div style={{ background: '#fff' }}>
                    <Text value={item.title} statename="achievements.title" stateid={item.id} placeholder="Certified Business Intelligence (BI)" />
                </div>
            )}
        />
    );
}

/* Export Component =============================== */
export default Achievements;

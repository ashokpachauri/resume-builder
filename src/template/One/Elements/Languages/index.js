import React from 'react';

import { useDispatch } from 'react-redux';

import { Toast, Util } from '@lib';

import { Text, Dnd2Column } from '@component';

import { addSkill, updateSkill, deleteSkillData } from '../../../../redux/core/actions';

// import styles from './skills.module.scss';

function Languages(props) {
    const dispatch = useDispatch();

    const _updateLanguage = (data) => {
        const storeReorder = Util.mapOrder(props.data, data, 'id');
        dispatch(updateLanguage(storeReorder));
    };

    const _addNewItem = () => {
        dispatch(addLanguage());
    };

    const _removeItem = (id, data) => {
        Toast.showUndo(id, data, 'languages', 'Languages Item Removed');
        dispatch(deleteLanguageData(id));
    };

    const { data } = props;
    return (
        <Dnd2Column
            data={data}
            reorder={(e) => _updateLanguage(e)}
            additem={_addNewItem}
            removeitem={(e) => _removeItem(e, data)}
            renderItem={(item) => (
                <div style={{ background: '#fff' }}>
                    <Text value={item.title} statename="languages.title" stateid={item.id} placeholder="English" />
                </div>
            )}
        />
    );
}

/* Export Component =============================== */
export default Languages;

import React from 'react';

import { appStore } from '../../redux/store';
import {
    addDeletedWorkExperienceItem,
    addDeletedEducationItem,
    addDeletedSkillItem,
    addDeletedLanguageItem,
    addDeletedAchievementItem,
    addDeletedInterestItem,
} from '../../redux/core/actions';

import styles from './toastUndo.module.scss';

const ToastUndo = ({ itemId, message, closeToast, data, type }) => {
    const deletedItem = data.filter(({ id }) => id === itemId);
    // const findIndex = data.findIndex(e => e.id === itemId);
    function handleClick() {
        if (type === 'workExperience') {
            appStore.dispatch(addDeletedWorkExperienceItem(deletedItem));
        } else if (type === 'education') {
            appStore.dispatch(addDeletedEducationItem(deletedItem));
        } else if (type === 'skills') {
            appStore.dispatch(addDeletedSkillItem(deletedItem));
        } else if (type === 'language') {
            appStore.dispatch(addDeletedLanguageItem(deletedItem));
        } else if (type === 'achievements') {
            appStore.dispatch(addDeletedAchievementItem(deletedItem));
        } else if (type === 'interests') {
            appStore.dispatch(addDeletedInterestItem(deletedItem));
        }

        closeToast();
    }

    return (
        <div className={styles.toastBox}>
            <div className={styles.toastMessage}>{message}</div>
            <div className={styles.toastUndoBtn} onClick={handleClick}>
                UNDO
            </div>
        </div>
    );
};

/* Export Component =============================== */
export default ToastUndo;

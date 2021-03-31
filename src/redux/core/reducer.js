import { actionTypes } from './actionTypes';

const initialState = {
    userData: {
        name: '',
        address: '',
        email: '',
        mobile: '',
        userData: '',
        profile: '',
        infoTitle: 'Personal info',
        profileTitle: 'Profile',
        additionalInfoTitle:'Additional Information',
        additionalInfo:'Some work details, achievements or much more...',
        workExperienceTitle: 'Work experience',
        educationTitle: 'Education',
        skillsTitle: 'Skills',
        languageTitle:'Languages',
        achievementTitle:'Certification',
        photo: 'images/nobody.jpg',
    },
    workExperience: [{ id: '1' }],
    education: [{ id: '1' }],
    skills: [{ id: '1' }],
    languages: [{ id: '1' }],
    achievements: [{ id: '1' }],
    theme: {
        color: '#03A9F4',
        fontFamily: 'Source Sans Pro',
    },
    itemStatus: {
        picture: false,
        info: true,
        profile: true,
        additionalInfo: true,
        workExperience: true,
        education: true,
        skills: true,
        languages: true,
    },
};

export default function core(state = initialState, action) {
    switch (action.type) {
        case actionTypes.UPDATE_USER_DATA:
            if (!action.payload) return state;

            return {
                ...state,
                userData: {
                    ...state.userData,
                    ...action.payload,
                },
            };

        case actionTypes.UPDATE_THEME:
            if (!action.payload) return state;

            return {
                ...state,
                theme: {
                    ...state.theme,
                    ...action.payload,
                },
            };
        case actionTypes.UPDATE_ITEM_STATUS:
            if (!action.payload) return state;

            return {
                ...state,
                itemStatus: {
                    ...state.itemStatus,
                    ...action.payload,
                },
            };

        case actionTypes.ADD_NEW_WORK_EXPERIENCE:
            if (!action.payload) return state;

            return {
                ...state,
                workExperience: [
                    ...state.workExperience,
                    {
                        ...action.payload,
                    },
                ],
            };

        case actionTypes.UPDATE_WORK_EXPERIENCE:
            if (!action.payload) return state;

            return Object.assign({}, state, {
                workExperience: action.payload,
            });

        case actionTypes.UPDATE_WORK_EXPERIENCE_DATA:
            if (!action.payload || !action.payloadId) return state;

            const newWorkExperience = JSON.parse(JSON.stringify(state.workExperience));
            const index = state.workExperience
                .map((itm) => {
                    return itm.id;
                })
                .indexOf(action.payloadId);
            if (index > -1) {
                Object.keys(action.payload).forEach(function (key) {
                    newWorkExperience[index][key] = action.payload[key];
                });
            }
            return {
                ...state,
                workExperience: [...newWorkExperience],
            };

        case actionTypes.DELETE_WORK_EXPERIENCE_DATA:
            if (!action.payload) return state;

            let newWkE = JSON.parse(JSON.stringify(state.workExperience));
            newWkE = state.workExperience.filter(({ id }) => id !== action.payload);
            return {
                ...state,
                workExperience: [...newWkE],
            };

        case actionTypes.ADD_DELETED_WORK_EXPERIENCE_ITEM:
            if (!action.payload) return state;

            return {
                ...state,
                workExperience: [...state.workExperience, ...action.payload],
            };

        case actionTypes.ADD_NEW_EDUCATION:
            if (!action.payload) return state;

            return {
                ...state,
                education: [
                    ...state.education,
                    {
                        ...action.payload,
                    },
                ],
            };

        case actionTypes.UPDATE_EDUCATION:
            if (!action.payload) return state;

            return Object.assign({}, state, {
                education: action.payload,
            });

        case actionTypes.UPDATE_EDUCATION_DATA:
            if (!action.payload || !action.payloadId) return state;

            const neweducation = JSON.parse(JSON.stringify(state.education));
            const ejuIndex = state.education
                .map((itm) => {
                    return itm.id;
                })
                .indexOf(action.payloadId);
            if (ejuIndex > -1) {
                Object.keys(action.payload).forEach(function (key) {
                    neweducation[ejuIndex][key] = action.payload[key];
                });
            }
            return {
                ...state,
                education: [...neweducation],
            };

        case actionTypes.DELETE_EDUCATION_DATA:
            if (!action.payload) return state;

            let newE = JSON.parse(JSON.stringify(state.education));
            newE = state.education.filter(({ id }) => id !== action.payload);
            return {
                ...state,
                education: [...newE],
            };

        case actionTypes.ADD_DELETED_WORK_EDUCATION_ITEM:
            if (!action.payload) return state;

            return {
                ...state,
                education: [...state.education, ...action.payload],
            };

        case actionTypes.ADD_NEW_SKILL:
            if (!action.payload) return state;

            return {
                ...state,
                skills: [
                    ...state.skills,
                    {
                        ...action.payload,
                    },
                ],
            };

        case actionTypes.UPDATE_SKILL:
            if (!action.payload) return state;

            return Object.assign({}, state, {
                skills: action.payload,
            });

        case actionTypes.UPDATE_SKILL_DATA:
            if (!action.payload || !action.payloadId) return state;

            const newSkills = JSON.parse(JSON.stringify(state.skills));
            const skillsIndex = state.skills
                .map((itm) => {
                    return itm.id;
                })
                .indexOf(action.payloadId);
            if (skillsIndex > -1) {
                Object.keys(action.payload).forEach(function (key) {
                    newSkills[skillsIndex][key] = action.payload[key];
                });
            }
            return {
                ...state,
                skills: [...newSkills],
            };

        case actionTypes.DELETE_SKILL_DATA:
            if (!action.payload) return state;

            let newS = JSON.parse(JSON.stringify(state.skills));
            newS = state.skills.filter(({ id }) => id !== action.payload);
            return {
                ...state,
                skills: [...newS],
            };

        case actionTypes.ADD_DELETED_WORK_SKILL_ITEM:
            if (!action.payload) return state;

            return {
                ...state,
                skills: [...state.skills, ...action.payload],
            };
        case actionTypes.ADD_NEW_LANGUAGE:
            if (!action.payload) return state;

            return {
                ...state,
                languages: [
                    ...state.languages,
                    {
                        ...action.payload,
                    },
                ],
            };

        case actionTypes.UPDATE_LANGUAGE:
            if (!action.payload) return state;

            return Object.assign({}, state, {
                languages: action.payload,
            });

        case actionTypes.UPDATE_LANGUAGE_DATA:
            if (!action.payload || !action.payloadId) return state;

            const newLanguages = JSON.parse(JSON.stringify(state.languages));
            const languagesIndex = state.languages
                .map((itm) => {
                    return itm.id;
                })
                .indexOf(action.payloadId);
            if (languagesIndex > -1) {
                Object.keys(action.payload).forEach(function (key) {
                    newLanguages[languagesIndex][key] = action.payload[key];
                });
            }
            return {
                ...state,
                languages: [...newLanguages],
            };

        case actionTypes.DELETE_LANGUAGE_DATA:
            if (!action.payload) return state;

            let newL = JSON.parse(JSON.stringify(state.languages));
            newL = state.languages.filter(({ id }) => id !== action.payload);
            return {
                ...state,
                languages: [...newL],
            };

        case actionTypes.ADD_DELETED_WORK_LANGUAGE_ITEM:
            if (!action.payload) return state;

            return {
                ...state,
                languages: [...state.languages, ...action.payload],
            };
        case actionTypes.ADD_NEW_ACHIEVEMENT:
            if (!action.payload) return state;

            return {
                ...state,
                achievements: [
                    ...state.achievements,
                    {
                        ...action.payload,
                    },
                ],
            };

        case actionTypes.UPDATE_ACHIEVEMENT:
            if (!action.payload) return state;

            return Object.assign({}, state, {
                achievements: action.payload,
            });

        case actionTypes.UPDATE_ACHIEVEMENT_DATA:
            if (!action.payload || !action.payloadId) return state;

            const newAchievements = JSON.parse(JSON.stringify(state.achievements));
            const achievementsIndex = state.achievements
                .map((itm) => {
                    return itm.id;
                })
                .indexOf(action.payloadId);
            if (achievementsIndex > -1) {
                Object.keys(action.payload).forEach(function (key) {
                    newAchievements[achievementsIndex][key] = action.payload[key];
                });
            }
            return {
                ...state,
                achievements: [...newLanguages],
            };

        case actionTypes.DELETE_ACHIEVEMENT_DATA:
            if (!action.payload) return state;

            let newA = JSON.parse(JSON.stringify(state.achievements));
            newL = state.achievements.filter(({ id }) => id !== action.payload);
            return {
                ...state,
                achievements: [...newA],
            };

        case actionTypes.ADD_DELETED_WORK_ACHIEVEMENT_ITEM:
            if (!action.payload) return state;

            return {
                ...state,
                achievements: [...state.achievements, ...action.payload],
            };
        default:
            return { ...state };
    }
}

export interface TProps {
    theme: {
        color: string;
        fontFamily: string;
    };
    userData: {
        name: string;
        infoTitle: string;
        address: string;
        email: string;
        mobile: string;
        dob: string;
        userData: string;
        profileTitle: string;
        profile: string;
        additionalInfoTitle:string;
        additionalInfo:string;
        workExperienceTitle: string;
        educationTitle: string;
        skillsTitle: string;
        languageTitle: string;
        achievementTitle: string;
    };
    workExperience: [];
    education: [];
    skills: [];
    languages: [];
    achievements: [];
    itemStatus: {
        [key: string]: boolean;
    };
}

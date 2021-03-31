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
        userData: string;
        profileTitle: string;
        profile: string;
        additionalInfoTitle:string;
        additionalInfo:string;
        workExperienceTitle: string;
        educationTitle: string;
        skillsTitle: string;
        languageTitle: string;
    };
    workExperience: [];
    education: [];
    skills: [];
    languages: [];
    itemStatus: {
        [key: string]: boolean;
    };
}

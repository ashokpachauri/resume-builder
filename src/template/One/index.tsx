import React from 'react';
import { connect } from 'react-redux';

import { Text } from '@component';
import { WorkExperience, Education, Skills, Languages, Achievements, Interests, Photo } from './Elements';
import styles from './one.module.scss';

import { TProps } from './one';

class Template extends React.Component<TProps> {
    constructor(props: TProps) {
        super(props);
    }

    render() {
        const { itemStatus } = this.props;
        return (
            <div className={styles.insideCon}>
                <div>
                    <Text value={this.props.userData.name} statename="userData.name" placeholder="Your Name" customclass={styles.name} />
                </div>
                <div className={styles.underName} style={{ borderTopColor: this.props.theme.color }} />

                {itemStatus.picture && (
                    <div className={styles.image}>
                        <Photo userData={this.props.userData} />
                    </div>
                )}

                {itemStatus.info && (
                    <div className={[styles.info, styles.box].join(' ')}>
                        <Text
                            value={this.props.userData.infoTitle}
                            statename="userData.infoTitle"
                            placeholder="Personal info"
                            customclass={styles.title}
                            tag="div"
                        />
                        <Text value={this.props.userData.address} statename="userData.address" placeholder="address: Berlin, Germany" />
                        <Text value={this.props.userData.email} statename="userData.email" placeholder="sample@email.com" />
                        <Text value={this.props.userData.mobile} statename="userData.mobile" placeholder="(+1) 123 456 7890" />
                        <Text value={this.props.userData.dob} statename="userData.dob" placeholder="DOB : DD/MM/YYYY" />
                        <Text value={this.props.userData.userData} statename="userData.userData" placeholder="Your other data" />
                    </div>
                )}

                {itemStatus.profile && (
                    <div className={[styles.profile, styles.box].join(' ')}>
                        <Text
                            value={this.props.userData.profileTitle}
                            statename="userData.profileTitle"
                            placeholder="Profile"
                            customclass={styles.title}
                            tag="div"
                        />
                        <Text
                            value={this.props.userData.profile}
                            statename="userData.profile"
                            placeholder="I'm a full-stack developer..."
                        />
                    </div>
                )}

                {itemStatus.workExperience && (
                    <div className={[styles.workExperience, styles.box].join(' ')}>
                        <Text
                            value={this.props.userData.workExperienceTitle}
                            statename="userData.workExperienceTitle"
                            placeholder="Work experience"
                            customclass={styles.title}
                            tag="div"
                        />
                        <WorkExperience data={this.props.workExperience} color={this.props.theme.color} />
                    </div>
                )}

                {itemStatus.education && (
                    <div className={[styles.education, styles.box].join(' ')}>
                        <Text
                            value={this.props.userData.educationTitle}
                            statename="userData.educationTitle"
                            placeholder="Education"
                            customclass={styles.title}
                            tag="div"
                        />
                        <Education data={this.props.education} />
                    </div>
                )}

                {itemStatus.skills && (
                    <div className={[styles.skills, styles.box].join(' ')}>
                        <Text
                            value={this.props.userData.skillsTitle}
                            statename="userData.skillsTitle"
                            placeholder="Skills"
                            customclass={styles.title}
                            tag="div"
                        />

                        <Skills data={this.props.skills} />
                    </div>
                )}
                {itemStatus.languages && (
                    <div className={[styles.languages, styles.box].join(' ')}>
                        <Text
                            value={this.props.userData.languageTitle}
                            statename="userData.languageTitle"
                            placeholder="Language"
                            customclass={styles.title}
                            tag="div"
                        />

                        <Languages data={this.props.languages} />
                    </div>
                )}
                {itemStatus.achievements && (
                    <div className={[styles.achievements, styles.box].join(' ')}>
                        <Text
                            value={this.props.userData.achievementTitle}
                            statename="userData.achievementTitle"
                            placeholder="Certifications"
                            customclass={styles.title}
                            tag="div"
                        />

                        <Achievements data={this.props.achievements} />
                    </div>
                )}
                {itemStatus.interests && (
                    <div className={[styles.interests, styles.box].join(' ')}>
                        <Text
                            value={this.props.userData.interestTitle}
                            statename="userData.interestTitle"
                            placeholder="Interests"
                            customclass={styles.title}
                            tag="div"
                        />

                        <Interests data={this.props.interests} />
                    </div>
                )}
                {itemStatus.additionalInfo && (
                    <div className={[styles.additionalInfo, styles.box].join(' ')}>
                        <Text
                            value={this.props.userData.additionalInfoTitle}
                            statename="userData.additionalInfoTitle"
                            placeholder="Additional Information"
                            customclass={styles.title}
                            tag="div"
                        />
                        <Text
                            value={this.props.userData.additionalInfo}
                            statename="userData.additionalInfo"
                            placeholder="Some work details, achievements or much more..."
                        />
                    </div>
                )}
            </div>
        );
    }
}

const mapStateToProps = (store: any) => ({
    theme: store.theme,
    userData: store.userData,
    workExperience: store.workExperience,
    education: store.education,
    skills: store.skills,
    languages: store.languages,
    achievements: store.achievements,
    interests: store.interests,
    itemStatus: store.itemStatus,
});

const mapDispatchToProps = () => ({});

/* Export Component =============================== */
export default connect(mapStateToProps, mapDispatchToProps)(Template);

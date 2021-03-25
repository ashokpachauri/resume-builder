import React from 'react';
import Link from 'next/link';
import styles from './footer.module.scss';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={['row', styles.footerNav].join(' ')}>
                    <div className="col-md-4">
                        <Link href="/">
                            <a>
                                <img src="/images/logo1.png" alt="wtfresume logo (resume builder)" className={styles.logo} />
                            </a>
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <ul>
                            <li className={styles.footerNavTitle}>PAGES</li>
                            <li>
                                <Link href="/resume-builder">
                                    <a>Resume Builder</a>
                                </Link>
                            </li>
                             <li>
                                <a href="https://www.ropeyou.com" target="_blank" rel="noopener noreferrer">
                                    Login
                                </a>
                            </li>
                            <li>
                                <a href="https://www.ropeyou.com/terms" target="_blank" rel="noopener noreferrer">
                                    T&C
                                </a>
                            </li>
                            <li>
                                <a href="https://www.ropeyou.com/refund-return-policies.php" target="_blank" rel="noopener noreferrer"></a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <ul>
                            <li className={styles.footerNavTitle}>LINKS</li>
                            <li>
                                <a href="https://www.ropeyou.com/dashboard" target="_blank" rel="noopener noreferrer">
                                    Dashboard
                                </a>
                            </li>
                             <li>
                                <a href="https://www.ropeyou.com/broadcasts" target="_blank" rel="noopener noreferrer">
                                    Broadcasts
                                </a>
                            </li>
                            <li>
                                <a href="https://www.ropeyou.com/bridge" target="_blank" rel="noopener noreferrer">
                                    Bridge
                                </a>
                            </li>
                             <li>
                                <a href="https://www.ropeyou.com/blog-space" target="_blank" rel="noopener noreferrer">
                                    Bridge
                                </a>
                            </li>
                            <li>
                                <a href="https://www.ropeyou.com/streaming.php?file_key=a87ff679a2f3e71d9181a67b7542122c" target="_blank" rel="noopener noreferrer">
                                    Video Profiles
                                </a>
                            </li>
                            <li>
                                {/* <Link to="/insurance-api-service">
                                Insurance APIs
                            </Link> */}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className={styles.footerCopyright}>RYResume by RopeYou</div>
        </footer>
    );
}

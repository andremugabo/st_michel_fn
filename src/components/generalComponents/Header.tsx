import { Link } from "react-router-dom"
import logo from '../../assets/Logo.png'
import { useTranslation } from "react-i18next"
import { NavigationLink } from "./NavigationLink"
import fr from '../../assets/fr.png'
import en from '../../assets/en.png'
import rw from '../../assets/rw.png'
import { LanguageButton } from "./LanguageButton"

export const Header: React.FC = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        void i18n.changeLanguage(lng)
    }

    return (
        <nav className="bg-custom-blue w-full flex items-center justify-between p-2">
            <Link to="/" className="text-customYellow flex items-center justify-center">
                <img src={logo} alt="Logo" className="h-9" />
                <p>
                    Cathedral Saint Michel
                </p>
            </Link>
            <ul className="flex">
                <NavigationLink to="/" text={t('home')} />
                <div className="relative group">
                    <NavigationLink to="about" text={t('about')} />
                    <ul className="absolute hidden group-hover:block bg-custom-blue w-48 z-10 p-2 rounded-md">
                        <NavigationLink to="/layLeader" text={t('abouts.ourLeaders')} />
                        <NavigationLink to="/chorals" text={t('abouts.ourChorales')} />
                        <NavigationLink to="/catholicAction" text={t('abouts.catholicAction')} />
                    </ul>
                </div>
                <NavigationLink to="service" text={t('service')} />
            </ul>
            <div className="flex items-center justify-center">
                <LanguageButton onClick={() => changeLanguage('en')} imageSrc={en} altText={t('lang')} />
                <LanguageButton onClick={() => changeLanguage('fr')} imageSrc={fr} altText={t('lang')} />
                <LanguageButton onClick={() => changeLanguage('rw')} imageSrc={rw} altText={t('lang')} />
            </div>
        </nav>
    )
}
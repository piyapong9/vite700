import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const TitleLink = ({ isHighLight, title, link }) => {

    if (!link) {
        return <div className={`text-PrimaryAccent font-medium ${isHighLight ?"hover:text-PrimaryTitle":""}`}></div> 
    }
    return (
        <div className={`text-PrimaryAccent font-medium ${isHighLight ?"hover:text-PrimaryTitle":""}`}>
            <a href={link} target="_blank">
            {title}
            <FontAwesomeIcon className={`text-xs -rotate-45 duration-500 ease-out ${isHighLight ?"translate-x-1":""}`} icon={faArrowRight}/>
            </a>
        </div>
    )
}

export default TitleLink;
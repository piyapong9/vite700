import fileResume from '../../assets/Resume.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { data } from '../../content/header'; 

const Header = () => {
    return (
        <div className='flex flex-col gap-2'>
            <div className='text-left	text-3xl text-PrimaryTitle font-semibold'>{data.name}</div>
            <div className='text-left text-PrimaryAccent font-semibold'>{data.title}</div>
            <div className='text-left	text-sm w-5/6'>{data.caption}</div>
            <div className='text-left	mt-4'>
                <a href={data.link} target='_blank'>
                    <span className='rounded-md bg-PrrimaryBase text-black py-2 px-4'>
                    {data.btnText}
                        <span className='rotate-90 inline-block ml-2'><FontAwesomeIcon className='animate-bounce' icon={faArrowDown}/></span>
                    </span>
                </a>
            </div>
        </div>
    )
}

export default Header
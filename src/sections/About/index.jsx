import { data } from '../../content/about.js'
const About = () => {
  return (
    <div className='space-y-4'>
      <div className='text-PrimaryAccent font-medium'>{data.title}</div>
      <div>{data.description}</div>
    </div>
  )
}
 
export default About
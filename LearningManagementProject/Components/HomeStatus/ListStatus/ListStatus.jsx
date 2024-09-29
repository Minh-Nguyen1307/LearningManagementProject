import Stat from '../Stat/Stat';
import './ListStatus.css';

export default function ListStatus() {
  return (
    <div className='listStatus'>
      <Status numberStat="250+" describeStat="Courses by our best mentors"/>
      <Status numberStat="1000+" describeStat="Courses by our best mentors"/>
      <Status numberStat="15+" describeStat="Courses by our best mentors"/>
      <Status numberStat="2400+" describeStat="Courses by our best mentors"/>
    </div>
  )
}

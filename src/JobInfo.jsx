import React from 'react'
import Duties from './Duties'

const JobInfo = ({ info, currentItem }) => {
    console.log(info)
    const {  company, dates, duties, title } = info[currentItem]
  return (
    <article className='job-info'>
        <h3>{title}</h3>
        <span className="job-company">{company} </span>
        <p className="job-date">{dates}</p>
        <Duties duties={duties}/>
    </article>
  )
}

export default JobInfo

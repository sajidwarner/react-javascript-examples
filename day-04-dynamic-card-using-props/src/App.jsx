import React from 'react'
import Card from './components/Card'
import Card2 from './components/Card2';

const App = () => {


  const jobCards = [
    {
      title: "Senior UI Developer",
      price: "$120/hr",
      company: "Figma",
      icon: "logos:figma",
      bookmark: "ic:outline-bookmark-border",
      buttonText: "Apply"
    },
    {
      title: "Frontend Engineer",
      price: "$100/hr",
      company: "Google",
      icon: "logos:google-icon",
      bookmark: "ic:outline-bookmark-border",
      buttonText: "Apply"
    },
    {
      title: "Backend Developer",
      price: "$95/hr",
      company: "Node.js",
      icon: "logos:nodejs-icon",
      bookmark: "ic:outline-bookmark-border",
      buttonText: "Apply"
    },
    {
      title: "Full Stack Developer",
      price: "$130/hr",
      company: "Amazon",
      icon: "logos:aws",
      bookmark: "ic:outline-bookmark-border",
      buttonText: "Apply"
    },
    {
      title: "React Developer",
      price: "$110/hr",
      company: "Meta",
      icon: "logos:react",
      bookmark: "ic:outline-bookmark-border",
      buttonText: "Apply"
    },
    {
      title: "UX Designer",
      price: "$85/hr",
      company: "Adobe",
      icon: "logos:adobe",
      bookmark: "ic:outline-bookmark-border",
      buttonText: "Apply"
    },
    {
      title: "Mobile App Developer",
      price: "$125/hr",
      company: "Flutter",
      icon: "logos:flutter",
      bookmark: "ic:outline-bookmark-border",
      buttonText: "Apply"
    },
    {
      title: "DevOps Engineer",
      price: "$140/hr",
      company: "Docker",
      icon: "logos:docker-icon",
      bookmark: "ic:outline-bookmark-border",
      buttonText: "Apply"
    },
    {
      title: "Laravel Developer",
      price: "$105/hr",
      company: "PHP",
      icon: "logos:php",
      bookmark: "ic:outline-bookmark-border",
      buttonText: "Apply"
    },
    {
      title: "Data Scientist",
      price: "$150/hr",
      company: "Python",
      icon: "logos:python",
      bookmark: "ic:outline-bookmark-border",
      buttonText: "Apply"
    }
  ];

  const randerCard = () => {
    return jobCards.map((job, index) => (
      <Card
        key={index}
        title={job.title}
        price={job.price}
        company={job.company}
        icon={job.icon}
        bookmark={job.bookmark}
        buttonText={job.buttonText}
      />
    ));
  }


  const randercard2 = () =>{
    return jobCards.map((jobs, index) => (
      <Card2
      key={index}
      title={jobs.title}
      price={jobs.price}  
      company={jobs.company}
      icon={jobs.icon}
      bookmark={jobs.bookmark}
      buttonText={jobs.buttonText}
      />
    ))
}

  return (
    <div>
      hi there, this is app component, welcome to reactjs!
      <div className="container">
      {jobCards.map((job, index) => (
    <Card
      key={index}
      title={job.title}
      price={job.price}
      company={job.company}
      icon={job.icon}
      bookmark={job.bookmark}
      buttonText={job.buttonText}
    />
  ))}

      (randerCard())

      {randercard2()}



    </div>
    </div>
  )
}

export default App

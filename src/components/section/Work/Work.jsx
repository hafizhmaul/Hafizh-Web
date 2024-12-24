import CardProject from '@/components/layout/CardProject'
import Divider from '@/components/layout/Divider'
import Layout from '@/components/layout/Layout'
import React from 'react'

const Work = () => {
  const [project, setProject] = React.useState([])

  React.useEffect(() => {
    fetch('https://api.github.com/users/hafizhmaul/repos?per_page=100')
      .then((res) => res.json())
      .then((data) => setProject(data))
  },[])

  return (
    <Layout id={"work-page"}>
      <div id="work-container">
        <div id="work-section" className="flex items-center">
          <div id="work-headline" className="text-origin-color text-5xl mr-4 font-bold">Projects</div>
          <Divider height="0.5px" width='-webkit-fill-available' />
        </div>
        <CardProject data={project} />
      </div>
    </Layout>
  )
}

export default Work
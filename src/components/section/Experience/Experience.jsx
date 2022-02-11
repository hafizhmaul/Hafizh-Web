import React, { Fragment } from "react";
import { Divider, Layout } from "@/components";
import { collection, onSnapshot, query } from "firebase/firestore";
import db from "@/utils/firebase";
import { Tab } from "@headlessui/react";
import { IoMdArrowDropright } from 'react-icons/io'
import { config } from "@/utils/config";
import { useWindowSize } from "@/hooks/useWindowSize";
import { NOT_SELECTED_TAB, SELECTED_TAB } from "@/utils/constant";

const Experience = () => {
  const [works, setWorks] = React.useState([]);
  const size = useWindowSize();

  React.useEffect(() => {
    const colRef = collection(db, 'works-experience')

    const q = query(colRef)

    onSnapshot(q, (snapshot) => {
      let work = [];
      snapshot.docs.forEach(doc => {
        work.push({ ...doc.data(), id: doc.id })
      })
      setWorks(work.sort((a, b) => b.no - a.no))
    })
  }, [])


  return (
    <Layout id={"experience-page"}>
      <div id="experience-container">
        <div id="experience-section" className="flex items-center mb-6">
          <div id="experience-headline" className="text-yellow-origin text-5xl mr-4 font-bold">Experience</div>
          <Divider height="0.5px" width='-webkit-fill-available' />
        </div>
        <div id="tab-experience">
          <Tab.Group vertical>
            <Tab.List id="tablist-experience">
              {Object.values(works).map((item, idx) => (
                <Tab key={idx} as={Fragment}>
                  {({ selected }) => (
                    <div className={`${selected ? SELECTED_TAB : NOT_SELECTED_TAB} tab-company`}>
                      {item.company}
                    </div>
                  )}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels id="tab-summary">
              {Object.values(works).map((item, idx) => (
                <Tab.Panel key={idx} className="fadeIn">
                  <div id="company-info" className="flex font-bold text-2xl">
                    <span>{item.role}</span>
                    <span className="text-yellow-origin">&nbsp;@&nbsp;</span>
                    <span id="company-name" className="text-yellow-origin">
                      <a id="company-url" href={item.url} target="_blank" rel="noreferrer">{item.company}</a>
                    </span>
                  </div>
                  <div id="range-date" className="text-gray-400">{item.rangeDate}</div>
                  {item.summary.map((items, idx) => (
                    <div key={idx} id="work-summary" className="flex my-4">
                      <span className="mr-4"><IoMdArrowDropright fill={config.colors.yellowOrigin} /></span>
                      <div>{items}</div>
                    </div>
                  ))}
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </Layout>
  )
};

export default Experience;

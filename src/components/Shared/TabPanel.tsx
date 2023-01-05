import React from 'react'

interface ITabPanel {
    children: React.ReactNode
    value: number
    index: number | string
    className?: string
}

const TabPanel = ({children, index, value, className}: ITabPanel) => {
  return (
    <div style={{width: '100%',height: '100%'}} className={className} role="tabpanel" hidden={value !== index} id={`simple-tab-${index}`}>
        {value === index && <div style={{width: '100%',height: '100%'}}>{children}</div>}
    </div>
  )
}

export default TabPanel
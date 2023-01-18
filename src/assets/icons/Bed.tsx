import React from 'react'

interface Props {
    fill?: string
}

const Bed = ({fill}: Props) => {
  return (
    <svg width="20" height="14" viewBox="0 0 20 14" fill={fill} xmlns="http://www.w3.org/2000/svg">
        <path d="M19.75 6V10V10.75V13C19.75 13.41 19.41 13.75 19 13.75C18.59 13.75 18.25 13.41 18.25 13V10.75H10H1.75V13C1.75 13.414 1.414 13.75 1 13.75C0.586 13.75 0.25 13.414 0.25 13V1C0.25 0.586 0.586 0.25 1 0.25C1.414 0.25 1.75 0.586 1.75 1V9.25H9.25V3C9.25 2.59 9.59 2.25 10 2.25H16C18.42 2.25 19.75 3.58 19.75 6ZM5.5 7.5C6.881 7.5 8 6.381 8 5C8 3.619 6.881 2.5 5.5 2.5C4.119 2.5 3 3.619 3 5C3 6.381 4.119 7.5 5.5 7.5Z" fill={fill} />
    </svg>
  )
}

export default Bed
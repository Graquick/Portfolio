import React from 'react'

function SideBar() {

    const variantsIcon = {
        opened: {
            rotate: 90
        },
        closed: {
            rotate: 0
        }
    }

    const variantsMenu = {
        opened: {
            x: 0,
            display: "block"
        },
        closed: {
            x: 350,
            transitionEnd: {
                display: "none"
            }
        }
    }
    
  return (
    <>
        SideBar
    </>
  )
}

export default SideBar
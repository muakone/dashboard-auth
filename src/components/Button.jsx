import React from 'react'

const Button = ({ Text, styles }) => {
  return (
    <div className={styles}>
        {Text}
    </div>
  )
}

export default Button
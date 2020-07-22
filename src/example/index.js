import React, { useState } from 'react'
import Button from 'the-best-button2'

const Example = () => {
  const [loading, setLoading] = useState(false)

  const handleClick = () => setLoading(!loading)

  return (
    <div>
      <Button onClick={handleClick} loading={loading}>
        {loading ? 'Click me again!' : 'Click me!'}
      </Button>
    </div>
  )
}

export default Example

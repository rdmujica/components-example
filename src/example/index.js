import React, { useState } from 'react'
import { Button, Spinner } from 'components3000'

const Example = () => {
  const [loading, setLoading] = useState(false)

  const handleClick = () => setLoading(!loading)

  return (
    <div>
      <Button onClick={handleClick} loading={loading}>
        {loading ? 'Click me again!' : 'Click me!'}
      </Button>
      <br/>
      <br/>
      <br/>
      <br/>
      <div>
        <Spinner />
      </div>
    </div>
  )
}

export default Example

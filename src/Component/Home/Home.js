import React from 'react'
import { Button } from 'antd'

function HomeComponent(props) {
    return (
        <div style={{margin: '20px'}}>
            <h1>Home Page</h1>
            <Button  onClick={props.HandleClick}>Test</Button>
        </div>
    )
}
export default HomeComponent
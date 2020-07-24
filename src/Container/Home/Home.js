import React, { Component } from 'react'
import { HomeComponent } from '../../Component'
import axios from 'axios'
import { message } from 'antd'



export class HomeContainer extends Component {
    handleClick = () => {
        axios.get('http://192.168.18.17:3000/login')
            .then((response) => {
                document.write(response.data)
                console.log('Success', response);
            })
            .catch((err) => {
                message.error('Got An Error', err);
                console.log(err);
            })
    }
    render() {
        return (
            <div>
                <HomeComponent HandleClick={this.handleClick} />
            </div>
        )
    }
}

export default HomeContainer

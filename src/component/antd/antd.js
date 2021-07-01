import React, { Component } from 'react'
import { Button, DatePicker } from 'antd'

import 'antd/dist/antd.css'

export default class antd extends Component {
    render() {
        const { RangePicker } = DatePicker;
        return (
            <div>
                <Button type="primary">Primary Button</Button>
                <Button>Default Button</Button>
                <Button type="dashed">Dashed Button</Button>
                <br />
                <RangePicker />
            </div>
        )
    }
}

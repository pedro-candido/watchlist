import React from 'react';
import Button from '../Button'


export default {
   title: 'Components/Button',
   component: Button,
}

export const Primary = () => <Button type="btn-default">Primary</Button>

export const Secondary = () => <Button type="btn-secondary">Secondary</Button>

export const All_Buttons = () => <div className='d-flex'>
   <Button type="btn-default">Primary</Button>
   <Button type="btn-secondary">Secondary</Button>
</div>
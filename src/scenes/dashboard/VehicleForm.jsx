import React from 'react'
import { Button, Form, Input, Select, Space } from 'antd';
import { useNavigate } from 'react-router-dom';

function VehicleForm() {
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };

    const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
    };

    const [form] = Form.useForm();

    const navigate = useNavigate();
    const onFinish = async (values) => {

        const DataToSend = {
            name: values.name,
            capacity: parseInt(values.capcity,10),
            rentperhr: parseInt(values.rentperhr,10),
            img_url: values.img_url,
            type: values.type,
        }
        console.log(DataToSend);
        if (!localStorage.getItem('current-user')) {
            alert('Please login to book vehicle');
            return;
          }

        try{
             const response = await fetch('http://localhost:8000/vehicle/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(DataToSend),
             })
             const res = await response.json();
             if(res.success){
                alert('Vehicle added successfully')
                navigate('/admin/dashboard')
             }
             if(!res.success){
                alert("Error Message: " + res.message);
                navigate('/admin/dashboard')
             }

        }catch(error){
            console.log(error);
        }
      };
    
      const onReset = () => {
        form.resetFields();
      };
    return (
        <div className='m-5 '>
            <Form
                {...layout}
                form={form}
                name="control-hooks"
                onFinish={onFinish}
                style={{ maxWidth: 1080 }}
            >
                <Form.Item name="name" label="Name" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="capcity" label="Capacity" rules={[{ required: true }]}>
                    <Input type='number'/>
                </Form.Item>
                <Form.Item name="rentperhr" label="Rent/Hr" rules={[{ required: true }]}>
                    <Input type='number' />
                </Form.Item>
                <Form.Item name="img_url" label="Image URL" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="type" label="Type" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
    

                <Form.Item {...tailLayout}>
                    <Space>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                        <Button htmlType="button" onClick={onReset}>
                            Reset
                        </Button>
                    </Space>
                </Form.Item>
            </Form>
        </div>)
}

export default VehicleForm

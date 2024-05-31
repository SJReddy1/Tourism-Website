import React from 'react'
import { Button, Form, Input, Select, Space } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { useNavigate } from 'react-router-dom';

function HotelForm() {
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };

    const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
    };

    const [form] = Form.useForm();
    function isNumber(str) {
        if (typeof str !== 'string') {
            return false; // We only want to process strings
        }
        return !isNaN(parseFloat(str)) && isFinite(str);
    }

    const navigate = useNavigate();

    const onFinish = async (values) => {

        const DataToSend = {
            hotel_name: values.hotel_name,
            url:values.url,
            city: values.city,
            state: values.state,
            country: values.country,
            star_rating: parseInt(values.star_rating, 10),
            photo1: values.photo1,
            photo2: values.photo2,
            photo3: values.photo3,
            photo4: values.photo4,
            overview: values.overview,
            rating_average: parseInt(values.rating_average, 10),
            rentperday: parseInt(values.rentperday, 10),
            facility: [values.facility1, values.facility2, values.facility3, values.facility4, values.facility5].filter(Boolean),
        }

        if (!localStorage.getItem('current-user')) {
            alert('Please login to book vehicle');
            return;
        }

        if (!isNumber(values.rating_average) || !isNumber(values.rentperday)) {
            alert('Please enter a valid number');
            navigate('/');
            return;
        }

        try {
            const response = await fetch('http://localhost:8000/hotel/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(DataToSend),
            })
            const res = await response.json();
            if (res.success) {
                alert('Hotel added successfully')
                navigate('/admin/dashboard')
            }else{
                alert('Hotel not added successfully. Error: '+res.message)
                navigate('/admin/dashboard')
            }

        } catch (error) {
            console.log(error);
        }
    };

    const onReset = () => {
        form.resetFields();
    };

    return (
        <div className='m-5'>
            <Form
                {...layout}
                form={form}
                name="control-hooks"
                onFinish={onFinish}
                style={{ maxWidth: 1080 }}
            >
                <Form.Item name="hotel_name" label="Hotel Name" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="url" label="Booking URL" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="city" label="City" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="state" label="State" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="country" label="Country" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="star_rating" label="Stars" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="photo1" label="Image URL-1" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="photo2" label="Image URL-2" >
                    <Input />
                </Form.Item>
                <Form.Item name="photo3" label="Image URL-3" >
                    <Input />
                </Form.Item>
                <Form.Item name="photo4" label="Image URL-4" >
                    <Input />
                </Form.Item>
                <Form.Item name="overview" label="Description" rules={[{ required: true }]}>
                    <TextArea />
                </Form.Item>
                <Form.Item name="rating_average" label="Rating" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="rentperday" label="Rent/Day" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>

                <Form.Item name="facility1" label="Facility 1" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="facility2" label="Facility 2" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="facility3" label="Facility 3" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="facility4" label="Facility 4">
                    <Input />
                </Form.Item>
                <Form.Item name="facility5" label="Facility 5" >
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
        </div>
    )
}

export default HotelForm

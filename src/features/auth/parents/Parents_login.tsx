import React from 'react';
import { Card, Form, Input, Button, Typography } from 'antd';
import { PhoneOutlined, LoginOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Title, Text } = Typography;

/* ===================== STYLES ===================== */

const styles: Record<string, React.CSSProperties> = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '16px', // ✅ mobile padding
    background: 'linear-gradient(135deg, #f0f5ff, #e6f7ff)',
  },
  card: {
    width: '100%', // ✅ responsive
    maxWidth: 380, // ✅ desktop width
    padding: '32px 24px',
    textAlign: 'center',
    borderRadius: 12,
    boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
  },
  logo: {
    width: '100%', // ✅ responsive
    maxWidth: 250, // ✅ desktop size
    height: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block',
    marginBottom: 16,
  },
};

const Login: React.FC = () => {
  const navigate = useNavigate();

  const onFinish = (values: { phone: string }) => {
    console.log('Login Data:', values);
    navigate('/parent/dashboard');
  };

  return (
    <div style={styles.container}>
      <Card
        style={styles.card}
        bordered={false}
      >
        {/* School Logo */}
        <img
          src="/.png"
          alt="School Logo"
          style={styles.logo}
        />

        <Title
          level={3}
          style={{ marginBottom: 8 }}
        >
          Parent Login
        </Title>

        <Text type="secondary">Enter your registered phone number</Text>

        <Form
          layout="vertical"
          style={{ marginTop: 24 }}
          onFinish={onFinish}
        >
          <Form.Item
            label="Phone Number"
            name="phone"
            rules={[
              { required: true, message: 'Phone number is required' },
              {
                pattern: /^[0-9]{10,14}$/,
                message: 'Enter a valid phone number',
              },
            ]}
          >
            <Input
              size="large"
              prefix={<PhoneOutlined />}
              placeholder="01XXXXXXXXX"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              block
              icon={<LoginOutlined />}
            >
              Login
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;

import { UploadOutlined } from '@ant-design/icons';
import { Button, DatePicker, Form, Input, Select, Upload, message, ConfigProvider } from 'antd';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const { Option } = Select;
const { TextArea } = Input;

export default function Add_teacher() {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Success:', values);
    message.success('Teacher added successfully!');
    // navigate('/admin/management/teacher-management'); // Optional: redirect after success
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          borderRadius: 8,
          controlHeight: 48,
        },
        components: {
          Select: { controlHeightLG: 48 },
          Input: { controlHeightLG: 48 },
          Button: { controlHeightLG: 48 },
          DatePicker: { controlHeightLG: 48 },
        },
      }}
    >
      <div className="p-6">
        <header className="mb-6 flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-primary hover:bg-primary hover:text-white transition-colors"
          >
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-2xl font-semibold text-gray-800">Add New Teacher</h1>
        </header>

        <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm max-w-5xl mx-auto">
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            requiredMark={false}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2"
          >
            {/* Row 1 */}
            <Form.Item
              label={<span className="font-medium text-slate-600">First Name</span>}
              name="firstName"
              rules={[{ required: true, message: 'Please enter first name' }]}
            >
              <Input
                size="large"
                placeholder="First Name"
              />
            </Form.Item>

            <Form.Item
              label={<span className="font-medium text-slate-600">Last Name</span>}
              name="lastName"
              rules={[{ required: true, message: 'Please enter last name' }]}
            >
              <Input
                size="large"
                placeholder="Last Name"
              />
            </Form.Item>

            {/* Row 2 */}
            <Form.Item
              label={<span className="font-medium text-slate-600">Gender</span>}
              name="gender"
              rules={[{ required: true, message: 'Please select gender' }]}
            >
              <Select
                size="large"
                placeholder="Select Gender"
              >
                <Option value="male">Male</Option>
                <Option value="female">Female</Option>
                <Option value="other">Other</Option>
              </Select>
            </Form.Item>

            <Form.Item
              label={<span className="font-medium text-slate-600">Date Of Birth</span>}
              name="dob"
              rules={[{ required: true, message: 'Please select date of birth' }]}
            >
              <DatePicker
                size="large"
                className="w-full"
                format="YYYY-MM-DD"
              />
            </Form.Item>

            {/* Row 3 */}
            <Form.Item
              label={<span className="font-medium text-slate-600">Index Number</span>}
              name="indexNumber"
              rules={[{ required: true, message: 'Please enter index number' }]}
            >
              <Input
                size="large"
                placeholder="Index Number"
              />
            </Form.Item>

            <Form.Item
              label={<span className="font-medium text-slate-600">Teacher Type</span>}
              name="teacherType"
              rules={[{ required: true, message: 'Please select teacher type' }]}
            >
              <Select
                size="large"
                placeholder="Teacher Type"
              >
                <Option value="permanent">Permanent</Option>
                <Option value="part-time">Part-time</Option>
                <Option value="proxy">Proxy</Option>
              </Select>
            </Form.Item>

            {/* Row 4 */}
            <Form.Item
              label={<span className="font-medium text-slate-600">Blood Group</span>}
              name="bloodGroup"
            >
              <Select
                size="large"
                placeholder="Select Blood Group"
              >
                <Option value="A+">A+</Option>
                <Option value="A-">A-</Option>
                <Option value="B+">B+</Option>
                <Option value="B-">B-</Option>
                <Option value="AB+">AB+</Option>
                <Option value="AB-">AB-</Option>
                <Option value="O+">O+</Option>
                <Option value="O-">O-</Option>
              </Select>
            </Form.Item>

            <Form.Item
              label={<span className="font-medium text-slate-600">Religion</span>}
              name="religion"
            >
              <Select
                size="large"
                placeholder="Select Religion"
              >
                <Option value="islam">Islam</Option>
                <Option value="hinduism">Hinduism</Option>
                <Option value="christianity">Christianity</Option>
                <Option value="buddhism">Buddhism</Option>
                <Option value="other">Other</Option>
              </Select>
            </Form.Item>

            {/* Row 5 */}
            <Form.Item
              label={<span className="font-medium text-slate-600">Email Address</span>}
              name="email"
              rules={[
                { required: true, message: 'Please enter email' },
                { type: 'email', message: 'Please enter a valid email' },
              ]}
            >
              <Input
                size="large"
                placeholder="Email Address"
              />
            </Form.Item>

            <Form.Item
              label={<span className="font-medium text-slate-600">Phone Number</span>}
              name="phone"
              rules={[{ required: true, message: 'Please enter phone number' }]}
            >
              <Input
                size="large"
                placeholder="Phone Number"
              />
            </Form.Item>

            {/* Row 6 */}
            <Form.Item
              label={<span className="font-medium text-slate-600">Designation</span>}
              name="designation"
              rules={[{ required: true, message: 'Please enter designation' }]}
            >
              <Input
                size="large"
                placeholder="Designation"
              />
            </Form.Item>

            <Form.Item
              label={<span className="font-medium text-slate-600">Upload NID</span>}
              name="nid"
              valuePropName="fileList"
              getValueFromEvent={(e: any) => {
                if (Array.isArray(e)) return e;
                return e?.fileList;
              }}
            >
              <Upload
                maxCount={1}
                listType="picture"
                beforeUpload={() => false}
              >
                <Button
                  size="large"
                  icon={<UploadOutlined />}
                  className="w-full text-left"
                >
                  Click to Upload
                </Button>
              </Upload>
            </Form.Item>

            {/* Row 7 - Photos */}
            <Form.Item
              label={<span className="font-medium text-slate-600">Upload Profile Pic</span>}
              name="profilePic"
              valuePropName="fileList"
              getValueFromEvent={(e: any) => {
                if (Array.isArray(e)) return e;
                return e?.fileList;
              }}
            >
              <Upload
                maxCount={1}
                listType="picture-card"
                beforeUpload={() => false}
              >
                <div>
                  <UploadOutlined />
                  <div style={{ marginTop: 8 }}>Upload</div>
                </div>
              </Upload>
            </Form.Item>

            <Form.Item
              label={<span className="font-medium text-slate-600">Upload Signature</span>}
              name="signature"
              valuePropName="fileList"
              getValueFromEvent={(e: any) => {
                if (Array.isArray(e)) return e;
                return e?.fileList;
              }}
            >
              <Upload
                maxCount={1}
                listType="picture-card"
                beforeUpload={() => false}
              >
                <div>
                  <UploadOutlined />
                  <div style={{ marginTop: 8 }}>Upload</div>
                </div>
              </Upload>
            </Form.Item>

            {/* Row 8 - Skills */}
            <div className="md:col-span-2">
              <Form.Item
                label={<span className="font-medium text-slate-600">Skills</span>}
                name="skills"
              >
                <Select
                  mode="multiple"
                  size="large"
                  placeholder="Select or type skills"
                  tokenSeparators={[',']}
                />
              </Form.Item>
            </div>

            {/* Row 9 - Address */}
            <div className="md:col-span-2">
              <Form.Item
                label={<span className="font-medium text-slate-600">Address Info</span>}
                name="address"
              >
                <TextArea
                  rows={4}
                  placeholder="Enter full address..."
                  className="resize-none"
                />
              </Form.Item>
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 flex justify-end mt-4">
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                className="px-8 h-12 text-base font-medium bg-primary hover:bg-primary/90"
              >
                Submit Teacher
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </ConfigProvider>
  );
}

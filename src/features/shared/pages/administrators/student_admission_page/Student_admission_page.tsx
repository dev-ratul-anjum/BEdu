import { Dynamic_breadcrumb } from '@/common/components/Dynamic_breadcrumb';
import { UploadOutlined, PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import {
  Button,
  Card,
  Col,
  DatePicker,
  Form,
  Input,
  Row,
  Select,
  Steps,
  Upload,
  message,
} from 'antd';
import { useState } from 'react';

const { Step } = Steps;
const { Option } = Select;

const mockExistingStudents = [
  { class: 10, roll: 1 },
  { class: 10, roll: 2 },
  { class: 9, roll: 5 },
];

export default function Student_admission_page() {
  const [current, setCurrent] = useState(0);
  const [form] = Form.useForm();

  const next = () => {
    form
      .validateFields()
      .then(() => {
        setCurrent(current + 1);
      })
      .catch((error) => {
        console.log('Validate Failed:', error);
      });
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const onFinish = (values: any) => {
    console.log('Form values:', values);
    message.success('Student admission submitted successfully!');
  };

  const steps = [
    {
      title: 'Student Information',
      content: (
        <div className="py-4">
          <Row gutter={[16, 16]}>
            <Col
              xs={24}
              md={12}
              lg={6}
            >
              <Form.Item
                name="firstName"
                label="First Name"
                rules={[{ required: true, message: 'Please enter first name' }]}
              >
                <Input placeholder="Enter First Name" />
              </Form.Item>
            </Col>
            <Col
              xs={24}
              md={12}
              lg={6}
            >
              <Form.Item
                name="lastName"
                label="Last Name"
                rules={[{ required: true, message: 'Please enter last name' }]}
              >
                <Input placeholder="Enter Last Name" />
              </Form.Item>
            </Col>
            <Col
              xs={24}
              md={12}
              lg={6}
            >
              <Form.Item
                name="gender"
                label="Gender"
                rules={[{ required: true, message: 'Please select gender' }]}
              >
                <Select placeholder="Select Gender">
                  <Option value="male">Male</Option>
                  <Option value="female">Female</Option>
                  <Option value="other">Other</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col
              xs={24}
              md={12}
              lg={6}
            >
              <Form.Item
                name="dob"
                label="Date Of Birth"
                rules={[{ required: true, message: 'Please select date of birth' }]}
              >
                <DatePicker style={{ width: '100%' }} />
              </Form.Item>
            </Col>
            <Col
              xs={24}
              md={12}
              lg={6}
            >
              <Form.Item
                name="class"
                label="Class"
                rules={[{ required: true, message: 'Please select class' }]}
              >
                <Select placeholder="Select Class">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((c) => (
                    <Option
                      key={c}
                      value={c}
                    >
                      {c}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
            <Col
              xs={24}
              md={12}
              lg={6}
            >
              <Form.Item
                name="section"
                label="Section"
                rules={[{ required: true, message: 'Please select section' }]}
              >
                <Select placeholder="Select Section">
                  {['A', 'B', 'C', 'D'].map((s) => (
                    <Option
                      key={s}
                      value={s}
                    >
                      {s}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
            <Col
              xs={24}
              md={12}
              lg={6}
            >
              <Form.Item
                name="roll"
                label="Roll"
                dependencies={['class']}
                rules={[
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      const selectedClass = getFieldValue('class');
                      if (!value || !selectedClass) {
                        return Promise.resolve();
                      }
                      const exists = mockExistingStudents.some(
                        (s) => s.class === selectedClass && s.roll === Number(value)
                      );
                      if (exists) {
                        return Promise.reject(
                          new Error('Roll number already exists for this class')
                        );
                      }
                      return Promise.resolve();
                    },
                  }),
                ]}
              >
                <Input placeholder="Enter Roll" />
              </Form.Item>
            </Col>
            <Col
              xs={24}
              md={12}
              lg={6}
            >
              <Form.Item
                name="bloodGroup"
                label="Blood Group"
              >
                <Select placeholder="Select Blood Group">
                  {['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'].map((bg) => (
                    <Option
                      key={bg}
                      value={bg}
                    >
                      {bg}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
            <Col
              xs={24}
              md={12}
              lg={6}
            >
              <Form.Item
                name="phone"
                label="Phone"
                rules={[{ required: true, message: 'Please enter phone number' }]}
              >
                <Input placeholder="Enter Phone" />
              </Form.Item>
            </Col>
            <Col
              xs={24}
              md={12}
              lg={6}
            >
              <Form.Item
                name="photo"
                label="Student Photo"
                rules={[{ required: true, message: 'Please upload student photo' }]}
              >
                <Upload
                  maxCount={1}
                  listType="picture"
                >
                  <Button icon={<UploadOutlined />}>Click to Upload</Button>
                </Upload>
              </Form.Item>
            </Col>
          </Row>
        </div>
      ),
    },
    {
      title: 'Parent / Guardian Information',
      content: (
        <div className="py-4">
          <Form.List
            name="guardians"
            initialValue={[{}]}
          >
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, ...restField }, index) => (
                  <Card
                    key={key}
                    type="inner"
                    title={`Guardian #${index + 1}`}
                    extra={
                      fields.length > 1 && (
                        <Button
                          type="text"
                          danger
                          icon={<DeleteOutlined />}
                          onClick={() => remove(name)}
                        >
                          Remove
                        </Button>
                      )
                    }
                    className="mb-4 bg-gray-50 border-gray-200"
                  >
                    <Row gutter={[16, 16]}>
                      <Col
                        xs={24}
                        md={12}
                        lg={8}
                        xl={6}
                      >
                        <Form.Item
                          {...restField}
                          name={[name, 'name']}
                          label="Name"
                          rules={[{ required: true, message: 'Guardian name required' }]}
                        >
                          <Input placeholder="Guardian Name" />
                        </Form.Item>
                      </Col>
                      <Col
                        xs={24}
                        md={12}
                        lg={8}
                        xl={6}
                      >
                        <Form.Item
                          {...restField}
                          name={[name, 'relation']}
                          label="Relation"
                          rules={[{ required: true, message: 'Relation required' }]}
                        >
                          <Input placeholder="e.g. Father, Mother" />
                        </Form.Item>
                      </Col>
                      <Col
                        xs={24}
                        md={12}
                        lg={8}
                        xl={6}
                      >
                        <Form.Item
                          {...restField}
                          name={[name, 'phone']}
                          label="Phone"
                          rules={[{ required: true, message: 'Phone required' }]}
                        >
                          <Input placeholder="Guardian Phone" />
                        </Form.Item>
                      </Col>
                      <Col
                        xs={24}
                        md={12}
                        lg={8}
                        xl={6}
                      >
                        <Form.Item
                          {...restField}
                          name={[name, 'occupation']}
                          label="Occupation"
                        >
                          <Input placeholder="Occupation" />
                        </Form.Item>
                      </Col>
                      <Col
                        xs={24}
                        md={12}
                        lg={8}
                        xl={6}
                      >
                        <Form.Item
                          {...restField}
                          name={[name, 'religion']}
                          label="Religion"
                        >
                          <Select placeholder="Select Religion">
                            <Option value="islam">Islam</Option>
                            <Option value="christianity">Christianity</Option>
                            <Option value="hinduism">Hinduism</Option>
                            <Option value="buddhism">Buddhism</Option>
                            <Option value="other">Other</Option>
                          </Select>
                        </Form.Item>
                      </Col>
                    </Row>
                  </Card>
                ))}
                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => add()}
                    block
                    icon={<PlusOutlined />}
                  >
                    Add Another Guardian
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
        </div>
      ),
    },
  ];

  return (
    <>
      <Dynamic_breadcrumb className="mb-6" />

      <Card className="rounded-lg shadow-sm border-0">
        <div className="flex items-center justify-between border-b pb-4 mb-6">
          <h2 className="text-lg font-bold">Student Admission</h2>
        </div>

        <Steps
          current={current}
          className="mb-8"
        >
          {steps.map((item) => (
            <Step
              key={item.title}
              title={item.title}
            />
          ))}
        </Steps>

        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          requiredMark={(label, { required }) => (
            <>
              {label}
              {required && <span className="text-danger ml-1">*</span>}
            </>
          )}
        >
          <div>{steps[current].content}</div>

          <div className="flex justify-end gap-3 mt-6 pt-4 border-t">
            {current > 0 && (
              <Button
                style={{ margin: '0 8px' }}
                onClick={() => prev()}
              >
                Previous
              </Button>
            )}
            {current < steps.length - 1 && (
              <Button
                type="primary"
                onClick={() => next()}
              >
                Next
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button
                type="primary"
                htmlType="submit"
              >
                Submit Admission
              </Button>
            )}
          </div>
        </Form>
      </Card>
    </>
  );
}

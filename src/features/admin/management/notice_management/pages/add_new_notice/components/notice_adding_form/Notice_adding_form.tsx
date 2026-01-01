import { Input, Button, Upload } from 'antd';
import { Search, UploadIcon } from 'lucide-react';
import { useState } from 'react';

const { Search: SearchInput, TextArea } = Input;

export interface NoticeFormValues {
  title: string;
  description: string;
  file?: File;
}

interface NoticeFormProps {
  routeName?: string;
  initialValues?: Partial<NoticeFormValues>;
  submitLabel?: string;
  onSubmit: (values: NoticeFormValues) => void;
}

export default function Notice_adding_form({
  routeName = 'Add Notice',
  initialValues,
  submitLabel = 'Save',
  onSubmit,
}: NoticeFormProps) {
  const [searchText, setSearchText] = useState('');
  const [title, setTitle] = useState(initialValues?.title ?? '');
  const [description, setDescription] = useState(initialValues?.description ?? '');
  const [file, setFile] = useState<File | undefined>();

  const handleSave = () => {
    onSubmit({ title, description, file });
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200">
      {/* Form */}
      <div className="p-6 space-y-5">
        <h2 className="text-lg font-semibold text-gray-900">{routeName}</h2>

        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
          <Input
            placeholder="Enter notice title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <TextArea
            rows={6}
            placeholder="Enter notice description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        {/* Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Upload Attachment</label>
          <Upload
            beforeUpload={(file) => {
              setFile(file);
              return false;
            }}
            maxCount={1}
          >
            <Button icon={<UploadIcon className="w-4 h-4" />}>Click to Upload</Button>
          </Upload>

          {file && <p className="text-xs text-gray-500 mt-1">Selected: {file.name}</p>}
        </div>

        {/* Action */}
        <div className="flex justify-end pt-4">
          <Button
            type="primary"
            onClick={handleSave}
          >
            {submitLabel}
          </Button>
        </div>
      </div>
    </div>
  );
}

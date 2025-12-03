import React, { useState } from 'react';
import { Calendar, Upload } from 'lucide-react';

// Helper Components
const SectionHeader = ({ title }: { title: string }) => (
    <div className="mb-6 border-b border-gray-200 pb-2">
        <h3 className="text-lg font-semibold text-blue-900 uppercase">
            {title}
        </h3>
    </div>
);

const InputField = ({
    label,
    placeholder,
    type = 'text',
    required = false,
    className = '',
}: any) => (
    <div className={`flex flex-col ${className}`}>
        <label className="mb-2 text-xs font-semibold text-gray-500 uppercase">
            {label} {required && <span className="text-red-500">*</span>}
        </label>
        <input
            type={type}
            placeholder={placeholder}
            className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:border-purple-500 focus:outline-none"
        />
    </div>
);

const SelectField = ({
    label,
    options,
    placeholder,
    required = false,
    className = '',
}: any) => (
    <div className={`flex flex-col ${className}`}>
        <label className="mb-2 text-xs font-semibold text-gray-500 uppercase">
            {label} {required && <span className="text-red-500">*</span>}
        </label>
        <div className="relative">
            <select className="w-full appearance-none rounded-md border border-gray-300 bg-white px-4 py-2 text-sm text-gray-500 focus:border-purple-500 focus:outline-none">
                <option value="">{placeholder}</option>
                {options.map((opt: string) => (
                    <option
                        key={opt}
                        value={opt}
                    >
                        {opt}
                    </option>
                ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                    className="h-4 w-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
            </div>
        </div>
    </div>
);

const DatePicker = ({
    label,
    placeholder,
    required = false,
    className = '',
}: any) => (
    <div className={`flex flex-col ${className}`}>
        <label className="mb-2 text-xs font-semibold text-gray-500 uppercase">
            {label} {required && <span className="text-red-500">*</span>}
        </label>
        <div className="relative">
            <input
                type="text"
                placeholder={placeholder}
                className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:border-purple-500 focus:outline-none"
            />
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
                <Calendar size={16} />
            </div>
        </div>
    </div>
);

const FileUpload = ({
    label,
    buttonText = 'Browse',
    placeholder = 'Choose file',
    className = '',
}: any) => (
    <div className={`flex flex-col ${className}`}>
        <label className="mb-2 text-xs font-semibold text-gray-500 uppercase">
            {label}
        </label>
        <div className="flex rounded-md border border-gray-300 bg-white p-1">
            <span className="flex-1 px-4 py-1 text-sm text-gray-500 flex items-center">
                {placeholder}
            </span>
            <button className="rounded bg-purple-600 px-4 py-1 text-xs font-bold text-white hover:bg-purple-700 uppercase">
                {buttonText}
            </button>
        </div>
    </div>
);

// Tab Content Components
const PersonalInfoTab = () => (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Left Column */}
        <div className="space-y-8">
            {/* Academic Information */}
            <div className="rounded-lg bg-white p-6 shadow-sm">
                <SectionHeader title="Academic Information" />
                <div className="grid gap-6">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <SelectField
                            label="Academic Year"
                            required
                            placeholder="2025[Jan-Dec]"
                            options={[]}
                        />
                        <SelectField
                            label="Class"
                            required
                            placeholder="Select Class *"
                            options={[]}
                        />
                    </div>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <SelectField
                            label="Section"
                            required
                            placeholder="Select Section *"
                            options={[]}
                        />
                        <InputField
                            label="Admission Number"
                            required
                            placeholder="89270"
                        />
                    </div>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <DatePicker
                            label="Admission Date"
                            placeholder="12/03/2025"
                        />
                        <InputField
                            label="Roll"
                            placeholder=""
                        />
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                        <SelectField
                            label="Group"
                            placeholder="Group"
                            options={[]}
                        />
                    </div>
                </div>
            </div>

            {/* Contact Information */}
            <div className="rounded-lg bg-white p-6 shadow-sm">
                <SectionHeader title="Contact Information" />
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <InputField
                        label="Email Address"
                        placeholder=""
                    />
                    <InputField
                        label="Phone Number"
                        required
                        placeholder=""
                    />
                </div>
            </div>

            {/* Student Address Info */}
            <div className="rounded-lg bg-white p-6 shadow-sm">
                <SectionHeader title="Student Address Info" />
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="flex flex-col">
                        <label className="mb-2 text-xs font-semibold text-gray-500 uppercase">
                            Current Address
                        </label>
                        <textarea className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:border-purple-500 focus:outline-none h-24"></textarea>
                    </div>
                    <div className="flex flex-col">
                        <label className="mb-2 text-xs font-semibold text-gray-500 uppercase">
                            Permanent Address
                        </label>
                        <textarea className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:border-purple-500 focus:outline-none h-24"></textarea>
                    </div>
                </div>
            </div>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
            {/* Personal Info */}
            <div className="rounded-lg bg-white p-6 shadow-sm">
                <SectionHeader title="Personal Info" />
                <div className="grid gap-6">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <InputField
                            label="First Name"
                            required
                            placeholder=""
                        />
                        <InputField
                            label="Last Name"
                            required
                            placeholder=""
                        />
                    </div>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <SelectField
                            label="Gender"
                            required
                            placeholder="Gender *"
                            options={[]}
                        />
                        <DatePicker
                            label="Date of Birth"
                            required
                            placeholder="12/03/2025"
                        />
                    </div>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <SelectField
                            label="Religion"
                            placeholder="Religion"
                            options={[]}
                        />
                        <InputField
                            label="Caste"
                            placeholder=""
                        />
                    </div>
                    <FileUpload label="Student Photo" />
                </div>
            </div>

            {/* Medical Record */}
            <div className="rounded-lg bg-white p-6 shadow-sm">
                <SectionHeader title="Medical Record" />
                <div className="grid gap-6">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <SelectField
                            label="Blood Group"
                            placeholder="Blood Group"
                            options={[]}
                        />
                        <SelectField
                            label="Category"
                            placeholder="Category"
                            options={[]}
                        />
                    </div>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <InputField
                            label="Height (in)"
                            placeholder=""
                        />
                        <InputField
                            label="Weight (kg)"
                            placeholder=""
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const ParentsGuardianInfoTab = () => (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Fathers Info & Mothers Info */}
        <div className="space-y-8">
            <div className="rounded-lg bg-white p-6 shadow-sm">
                <SectionHeader title="Fathers Info" />
                <div className="grid gap-6">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <InputField
                            label="Father Name"
                            placeholder=""
                        />
                        <InputField
                            label="Occupation"
                            placeholder=""
                        />
                    </div>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <InputField
                            label="Father Phone"
                            placeholder=""
                        />
                        <FileUpload
                            label="Fathers Photo"
                            buttonText="Browse"
                            placeholder="Photo"
                        />
                    </div>
                </div>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-sm">
                <SectionHeader title="Mothers Info" />
                <div className="grid gap-6">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <InputField
                            label="Mother Name"
                            placeholder=""
                        />
                        <InputField
                            label="Occupation"
                            placeholder=""
                        />
                    </div>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <InputField
                            label="Mother Phone"
                            placeholder=""
                        />
                        <FileUpload
                            label="Mothers Photo"
                            buttonText="Browse"
                            placeholder="Photo"
                        />
                    </div>
                </div>
            </div>
        </div>

        {/* Guardian Info */}
        <div className="space-y-8">
            <div className="rounded-lg bg-white p-6 shadow-sm">
                <SectionHeader title="Guardian Info" />

                {/* Radio Buttons */}
                <div className="mb-6">
                    <label className="mb-2 block text-xs font-semibold text-gray-500 uppercase">
                        Relation with Guardian
                    </label>
                    <div className="flex gap-4">
                        <label className="flex items-center gap-2 text-sm text-gray-600">
                            <input
                                type="radio"
                                name="relation"
                                className="text-purple-600 focus:ring-purple-500"
                            />{' '}
                            Father
                        </label>
                        <label className="flex items-center gap-2 text-sm text-gray-600">
                            <input
                                type="radio"
                                name="relation"
                                className="text-purple-600 focus:ring-purple-500"
                            />{' '}
                            Mother
                        </label>
                        <label className="flex items-center gap-2 text-sm text-gray-600">
                            <input
                                type="radio"
                                name="relation"
                                className="text-purple-600 focus:ring-purple-500"
                                defaultChecked
                            />{' '}
                            Others
                        </label>
                    </div>
                </div>

                <div className="grid gap-6">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <InputField
                            label="Guardians Name"
                            placeholder=""
                        />
                        <InputField
                            label="Relation with Guardian"
                            placeholder="Other"
                        />
                    </div>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <InputField
                            label="Guardians Email"
                            required
                            placeholder=""
                        />
                        <FileUpload
                            label="Guardian Photo"
                            buttonText="Browse"
                            placeholder="Photo"
                        />
                    </div>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <InputField
                            label="Guardians Phone"
                            placeholder=""
                        />
                        <InputField
                            label="Guardian Occupation"
                            placeholder=""
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="mb-2 text-xs font-semibold text-gray-500 uppercase">
                            Guardian Address
                        </label>
                        <textarea className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:border-purple-500 focus:outline-none h-24"></textarea>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const DocumentInfoTab = () => (
    <div className="space-y-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Document Info */}
            <div className="rounded-lg bg-white p-6 shadow-sm">
                <SectionHeader title="Document Info" />
                <div className="grid gap-6">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <InputField
                            label="National ID Card"
                            placeholder=""
                        />
                        <InputField
                            label="Birth Certificate Number"
                            placeholder=""
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="mb-2 text-xs font-semibold text-gray-500 uppercase">
                            Additional Notes
                        </label>
                        <textarea className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:border-purple-500 focus:outline-none h-24"></textarea>
                    </div>
                </div>
            </div>

            {/* Bank Information */}
            <div className="rounded-lg bg-white p-6 shadow-sm">
                <SectionHeader title="Bank Information" />
                <div className="grid gap-6">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <InputField
                            label="Bank Name"
                            placeholder=""
                        />
                        <InputField
                            label="Bank Account Number"
                            placeholder=""
                        />
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                        <InputField
                            label="IFSC Code"
                            placeholder=""
                        />
                    </div>
                </div>
            </div>
        </div>

        {/* Document Attachment */}
        <div className="rounded-lg bg-white p-6 shadow-sm">
            <SectionHeader title="Document Attachment" />
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                <FileUpload
                    label="Document 01 Title"
                    buttonText="Browse"
                    placeholder="01"
                />
                <FileUpload
                    label="Document 02 Title"
                    buttonText="Browse"
                    placeholder="01"
                />
                <FileUpload
                    label="Document 03 Title"
                    buttonText="Browse"
                    placeholder="01"
                />
                <FileUpload
                    label="Document 04 Title"
                    buttonText="Browse"
                    placeholder="01"
                />
            </div>
        </div>
    </div>
);

const StudentAddPage = () => {
    const [activeTab, setActiveTab] = useState('PERSONAL INFO');

    const tabs = [
        'PERSONAL INFO',
        'PARENTS & GUARDIAN INFO',
        'DOCUMENT INFO',
        'PREVIOUS SCHOOL INFORMATION',
        'OTHER INFO',
        'CUSTOM FIELD',
    ];

    const renderTabContent = () => {
        switch (activeTab) {
            case 'PERSONAL INFO':
                return <PersonalInfoTab />;
            case 'PARENTS & GUARDIAN INFO':
                return <ParentsGuardianInfoTab />;
            case 'DOCUMENT INFO':
                return <DocumentInfoTab />;
            default:
                return (
                    <div className="p-6 text-center text-gray-500">
                        Content for {activeTab} is under construction.
                    </div>
                );
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 p-4 md:p-8 font-sans">
            {/* Header */}
            <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
                <div>
                    <h1 className="text-2xl font-bold text-blue-900">
                        Add Student
                    </h1>
                    <nav className="text-sm text-gray-500">
                        <span>Dashboard</span> <span className="mx-2">|</span>{' '}
                        <span>Student Info</span>{' '}
                        <span className="mx-2">|</span>{' '}
                        <span className="text-blue-600">Student Admission</span>
                    </nav>
                </div>
                <div className="flex gap-3">
                    <button className="flex items-center gap-2 rounded bg-purple-600 px-4 py-2 text-sm font-bold text-white hover:bg-purple-700 uppercase">
                        <span>+</span> Import Student
                    </button>
                    <button className="flex items-center gap-2 rounded bg-purple-600 px-4 py-2 text-sm font-bold text-white hover:bg-purple-700 uppercase">
                        <span>✓</span> Save Student
                    </button>
                </div>
            </div>

            {/* Tabs */}
            <div className="mb-8 border-b border-gray-200">
                <div className="flex flex-wrap gap-4 md:gap-8">
                    {tabs.map(tab => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`pb-2 text-xs font-bold uppercase tracking-wide transition-colors ${
                                activeTab === tab
                                    ? 'border-b-2 border-purple-600 text-purple-600 bg-purple-100 px-4 rounded-t-md'
                                    : 'text-gray-500 hover:text-gray-700'
                            }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            {/* Tab Content */}
            {renderTabContent()}
        </div>
    );
};

export default StudentAddPage;

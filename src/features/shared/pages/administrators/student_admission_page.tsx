import { Dynamic_breadcrumb } from '@/common/components/Dynamic_breadcrumb';
import { MoreVertical } from 'lucide-react';

export default function Student_admission_page() {
  return (
    <>
      <Dynamic_breadcrumb className="mb-6" />

      <main className="bg-white rounded-lg shadow-sm">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-lg font-bold">Add New Student</h2>
          <button className="text-gray-400 hover:text-gray-600">
            <MoreVertical className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Gender <span className="text-red-500">*</span>
              </label>
              <select className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none appearance-none">
                <option value="">Please Select Gender *</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Date Of Birth <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                placeholder="dd/mm/yyyy"
                className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Roll</label>
              <input
                type="text"
                className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Blood Group <span className="text-red-500">*</span>
              </label>
              <select className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none appearance-none">
                <option value="">Please Select Group *</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Religion <span className="text-red-500">*</span>
              </label>
              <select className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none appearance-none">
                <option value="">Please Select Religion *</option>
                <option value="islam">Islam</option>
                <option value="christianity">Christianity</option>
                <option value="hinduism">Hinduism</option>
                <option value="buddhism">Buddhism</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">E-Mail</label>
              <input
                type="email"
                className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Class <span className="text-red-500">*</span>
              </label>
              <select className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none appearance-none">
                <option value="">Please Select Class *</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Section <span className="text-red-500">*</span>
              </label>
              <select className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none appearance-none">
                <option value="">Please Select Section *</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Admission ID</label>
              <input
                type="text"
                className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
              <input
                type="tel"
                className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
              />
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Short BIO</label>
              <textarea
                rows={6}
                className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Upload Student Photo (150px X 150px)
              </label>
              <input
                type="file"
                accept="image/*"
                className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-gray-200 file:text-gray-700 hover:file:bg-gray-300"
              />
            </div>
          </div>

          <div className="mt-6 flex gap-4">
            <button className="px-8 py-3 bg-orange-500 text-white rounded font-semibold hover:bg-orange-600 transition-colors">
              Save
            </button>
            <button className="px-8 py-3 bg-blue-900 text-white rounded font-semibold hover:bg-blue-800 transition-colors">
              Reset
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

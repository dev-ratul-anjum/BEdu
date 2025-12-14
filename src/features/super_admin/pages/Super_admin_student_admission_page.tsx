import { DynamicBreadcrumb } from '@/common/components/Breadcrumbs';

export default function Super_admin_student_admission_page() {
  return (
    <main className="min-h-screen bg-gray-50 p-4 font-sans">
      <h1 className="mb-3 text-3xl font-semibold">Add New Students</h1>
      <DynamicBreadcrumb className="mb-6" />

      <section className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-medium mb-4">Add New Students</h2>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm text-gray-700 mb-2">First Name *</label>
              <input
                className="w-full bg-gray-100 rounded px-3 py-2"
                placeholder=""
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-2">Last Name *</label>
              <input className="w-full bg-gray-100 rounded px-3 py-2" />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-2">Gender *</label>
              <select className="w-full bg-gray-100 rounded px-3 py-2">
                <option>Please Select Gender *</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-2">Date Of Birth *</label>
              <input
                type="date"
                className="w-full bg-gray-100 rounded px-3 py-2"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-2">Roll</label>
              <input className="w-full bg-gray-100 rounded px-3 py-2" />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-2">Blood Group *</label>
              <select className="w-full bg-gray-100 rounded px-3 py-2">
                <option>Please Select Group *</option>
                <option>A+</option>
                <option>B+</option>
                <option>O+</option>
                <option>AB+</option>
              </select>
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-2">Religion *</label>
              <select className="w-full bg-gray-100 rounded px-3 py-2">
                <option>Please Select Religion *</option>
                <option>Islam</option>
                <option>Hindu</option>
                <option>Christian</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-2">E-Mail</label>
              <input
                type="email"
                className="w-full bg-gray-100 rounded px-3 py-2"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-2">Class *</label>
              <select className="w-full bg-gray-100 rounded px-3 py-2">
                <option>Please Select Class *</option>
                <option>Play</option>
                <option>Nursery</option>
                <option>1</option>
                <option>2</option>
              </select>
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-2">Section *</label>
              <select className="w-full bg-gray-100 rounded px-3 py-2">
                <option>Please Select Section *</option>
                <option>A</option>
                <option>B</option>
                <option>C</option>
              </select>
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-2">Admission ID</label>
              <input className="w-full bg-gray-100 rounded px-3 py-2" />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-2">Phone</label>
              <input className="w-full bg-gray-100 rounded px-3 py-2" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <label className="block text-sm text-gray-700 mb-2">Short BIO</label>
              <textarea
                rows={8}
                className="w-full bg-gray-100 rounded px-3 py-2 resize-none"
              />
            </div>

            <div className="flex flex-col">
              <label className="block text-sm text-gray-700 mb-2">
                Upload Student Photo (150px X 150px)
              </label>
              <input
                type="file"
                className="text-sm text-gray-600"
              />
              <div className="mt-auto pt-4">
                <p className="text-xs text-gray-500">Recommended: 150x150px JPG/PNG</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 pt-4">
            <button
              type="submit"
              className="bg-yellow-400 text-white px-6 py-2 rounded shadow"
            >
              Save
            </button>
            <button
              type="reset"
              className="bg-sky-900 text-white px-6 py-2 rounded"
            >
              Reset
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}

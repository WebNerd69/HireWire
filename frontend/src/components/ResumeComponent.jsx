import React, { useState } from 'react';

const ResumeComponent = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    phone: '',
    email: '',
    linkedIn: '',
    gitHub: '',
    portfolio: '',

    degree1Name: '',
    degree1StartDate: '',
    degree1EndDate: '', 

    degree2Name: '',
    degree2StartDate: '',
    degree2EndDate: '', 

    skills: '',

    project1Name: '',
    project1Link: '',
    project1Description: '',

    project2Name: '',
    project2Link: '',
    project2Description: '',

    certificate1Name:'',
    certificate1SerialNumber:'',
    certificate1IssueingInstitute:'',

    certificate2Name:'',
    certificate2SerialNumber:'',
    certificate2IssueingInstitute:'',

    acheivements: '',
    summary:''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // You can add API call or save logic here
  };

  return (
    <div className='w-full pb-10'>
      <div className='w-full h-[15%] px-10 mt-5 mb-20 flex items-center'>
        <div className='flex items-center justify-center w-24 h-24 rounded-full bg-[#686df8]'>
          <p className='poppins-semi-bold text-6xl text-white'>R</p>
        </div>
        <p className='text-3xl poppins-semi-bold px-10'>Hi Rudra! 👋</p>
      </div>

      <form
        className='w-full  poppins-medium px-10 flex flex-col gap-y-10 relative'
        onSubmit={handleSubmit}
      >
        {/* personal info */}
        <div className='w-full px-10 py-10 rounded-xl border-2 relative flex flex-col justify-center gap-y-10'>
          <p className='text-xl text-zinc-900 absolute -top-4 bg-gray-50 px-2 poppins-semi-bold'>Personal information</p>
          <div className='w-full flex items-center justify-between'>
            {/* First, Middle, Last Name */}
            {['firstName', 'middleName', 'lastName'].map((field, idx) => (
              <div key={idx} className='px-5 py-5 border-2 w-[30%] relative rounded-lg'>
                <p className='text-sm text-zinc-900 absolute -top-3 bg-gray-50 px-2'>
                  {field.replace(/([A-Z])/g, ' $1').trim()}
                </p>
                <input
                  type="text"
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  placeholder={field.replace(/([A-Z])/g, ' $1').trim()}
                  className='bg-transparent w-full h-full outline-none'
                />
              </div>
            ))}
          </div>

          <div className='w-[65%] flex items-center justify-between'>
            {/* Phone & Email */}
            {[
              { name: 'phone', placeholder: '+91-1234567890', type: 'text' },
              { name: 'email', placeholder: 'cooldude@gmail.com', type: 'email' },
            ].map((item, idx) => (
              <div key={idx} className='px-5 py-5 border-2 w-[46%] relative rounded-lg'>
                <p className='text-sm text-zinc-900 absolute -top-3 bg-gray-50 px-2'>
                  {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                </p>
                <input
                  type={item.type}
                  name={item.name}
                  value={formData[item.name]}
                  onChange={handleChange}
                  placeholder={item.placeholder}
                  className='bg-transparent w-full h-full outline-none'
                />
              </div>
            ))}
          </div>
        </div>

        {/* links */}
        <div className='w-full px-10 py-10 rounded-xl border-2 relative flex flex-col justify-center gap-y-10'>
          <p className='text-xl text-zinc-900 absolute -top-4 bg-gray-50 px-2 poppins-semi-bold'>Links</p>
          <div className='w-full flex items-center justify-between'>
            {['linkedIn', 'gitHub', 'portfolio'].map((field, idx) => (
              <div key={idx} className='px-5 py-5 border-2 w-[30%] relative rounded-lg'>
                <p className='text-sm text-zinc-900 absolute -top-3 bg-gray-50 px-2'>
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </p>
                <input
                  type="text"
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  placeholder={`${field} profile`}
                  className='bg-transparent w-full h-full outline-none'
                />
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className='w-full px-10 py-10 rounded-xl border-2 relative flex flex-col justify-center gap-y-10'>
          <p className='text-xl text-zinc-900 absolute -top-4 bg-gray-50 px-2 poppins-semi-bold'>Education</p>
          <div className='w-full flex items-center justify-between'>
            <div className='px-5 py-5 border-2 w-[30%] relative rounded-lg'>
              <p className='text-sm text-zinc-900 absolute -top-3 bg-gray-50 px-2'>Degree 1</p>
              <input
                type="text"
                name='degree1Name'
                value={formData.degree1Name || ''}
                onChange={handleChange}
                placeholder='Degree + institute name'
                className='bg-transparent w-full h-full outline-none'
              />
            </div>
            <div className='px-5 py-5 border-2 w-[30%] relative rounded-lg'>
              <p className='text-sm text-zinc-900 absolute -top-3 bg-gray-50 px-2'>Start date</p>
              <input
                type="date"
                name={`degree1StartDate`}
                value={formData.degree1StartDate || ''}
                onChange={handleChange}
                className='bg-transparent w-full h-full outline-none'
              />
            </div>
            <div className='px-5 py-5 border-2 w-[30%] relative rounded-lg'>
              <p className='text-sm text-zinc-900 absolute -top-3 bg-gray-50 px-2'>End date</p>
              <input
                type="date"
                name={`degree1EndDate`}
                value={formData.degree1EndDate || ''}
                onChange={handleChange}
                className='bg-transparent w-full h-full outline-none'
              />
            </div>
          </div>

          <div className='w-full flex items-center justify-between'>
            <div className='px-5 py-5 border-2 w-[30%] relative rounded-lg'>
              <p className='text-sm text-zinc-900 absolute -top-3 bg-gray-50 px-2'>Degree 2</p>
              <input
                type="text"
                name={`degree2Name`}
                value={formData.degree2Name || ''}
                onChange={handleChange}
                placeholder='Degree + institute name'
                className='bg-transparent w-full h-full outline-none'
              />
            </div>
            <div className='px-5 py-5 border-2 w-[30%] relative rounded-lg'>
              <p className='text-sm text-zinc-900 absolute -top-3 bg-gray-50 px-2'>Start date</p>
              <input
                type="date"
                name={`degree2StartDate`}
                value={formData.degree2StartDate || ''}
                onChange={handleChange}
                className='bg-transparent w-full h-full outline-none'
              />
            </div>
            <div className='px-5 py-5 border-2 w-[30%] relative rounded-lg'>
              <p className='text-sm text-zinc-900 absolute -top-3 bg-gray-50 px-2'>End date</p>
              <input
                type="date"
                name={`degree2EndDate`}
                value={formData.degree2EndDate || ''}
                onChange={handleChange}
                className='bg-transparent w-full h-full outline-none'
              />
            </div>
          </div>
        </div>
        {/* skills */}
        <div className='px-5 py-5 border-2 w-[30%] relative rounded-xl'>
          <p className='text-xl poppins-semi-bold text-zinc-900 absolute -top-3 bg-gray-50 px-2'>Skills</p>
          <input
            type="text"
            name='skills'
            value={formData.skills}
            onChange={handleChange}
            className='bg-transparent w-full h-full outline-none'
            placeholder='Skill-1 Skill-2 ...'
          />
        </div>

        {/* projects */}
        <div className='w-full px-10 py-10 rounded-xl border-2 relative flex flex-col justify-center gap-y-10'>
          <p className='text-xl text-zinc-900 absolute -top-4 bg-gray-50 px-2 poppins-semi-bold'>Projects</p>
          {/* project 1 */}
          <div className='w-full flex items-center justify-between'>
            <div className='px-5 py-5 border-2 w-[30%] relative rounded-lg'>
              <p className='text-sm text-zinc-900 absolute -top-3 bg-gray-50 px-2'>Project 1 Name</p>
              <input
                type="text"
                name='project1Name'
                value={formData.project1Name || ''}
                onChange={handleChange}
                placeholder='Project name'
                className='bg-transparent w-full h-full outline-none'
              />
            </div>
            <div className='px-5 py-5 border-2 w-[30%] relative rounded-lg'>
              <p className='text-sm text-zinc-900 absolute -top-3 bg-gray-50 px-2'>Project link</p>
              <input
                type="text"
                name='project1Link'
                value={formData.project1Link || ''}
                onChange={handleChange}
                placeholder='Project link'
                className='bg-transparent w-full h-full outline-none'
              />
            </div>
            <div className='px-5 py-5 border-2 w-[30%] relative rounded-lg'>
              <p className='text-sm text-zinc-900 absolute -top-3 bg-gray-50 px-2'>Project Description</p>
              <input
                type="text"
                name='project1Description'
                value={formData.project1Description || ''}
                onChange={handleChange}
                placeholder='Project description'
                className='bg-transparent w-full h-full outline-none'
              />
            </div>

          </div>
          {/* project 2 */}
          <div className='w-full flex items-center justify-between'>
            <div className='px-5 py-5 border-2 w-[30%] relative rounded-lg'>
              <p className='text-sm text-zinc-900 absolute -top-3 bg-gray-50 px-2'>Project 2 Name</p>
              <input
                type="text"
                name='project2Name'
                value={formData.project2Name || ''}
                onChange={handleChange}
                placeholder='Project name'
                className='bg-transparent w-full h-full outline-none'
              />
            </div>
            <div className='px-5 py-5 border-2 w-[30%] relative rounded-lg'>
              <p className='text-sm text-zinc-900 absolute -top-3 bg-gray-50 px-2'>Project link</p>
              <input
                type="text"
                name='project2Link'
                value={formData.project2Link || ''}
                onChange={handleChange}
                placeholder='Project link'
                className='bg-transparent w-full h-full outline-none'
              />
            </div>
            <div className='px-5 py-5 border-2 w-[30%] relative rounded-lg'>
              <p className='text-sm text-zinc-900 absolute -top-3 bg-gray-50 px-2'>Project Description</p>
              <input
                type="text"
                name='project2Description'
                value={formData.project2Description || ''}
                onChange={handleChange}
                placeholder='Project description'
                className='bg-transparent w-full h-full outline-none'
              />
            </div>

          </div>


        </div>


        {/* certificates */}
        <div className='w-full px-10 py-10 rounded-xl border-2 relative flex flex-col justify-center gap-y-10'>
          <p className='text-xl text-zinc-900 absolute -top-4 bg-gray-50 px-2 poppins-semi-bold'>Certificates</p>
          {/* certificate 1 */}
          <div className='w-full flex items-center justify-between'>
            <div className='px-5 py-5 border-2 w-[30%] relative rounded-lg'>
              <p className='text-sm text-zinc-900 absolute -top-3 bg-gray-50 px-2'>Certificate 1 Name</p>
              <input
                type="text"
                name='certificate1Name'
                value={formData.certificate1Name || ''}
                onChange={handleChange}
                placeholder='certificate name'
                className='bg-transparent w-full h-full outline-none'
              />
            </div>
            <div className='px-5 py-5 border-2 w-[30%] relative rounded-lg'>
              <p className='text-sm text-zinc-900 absolute -top-3 bg-gray-50 px-2'>Serial number</p>
              <input
                type="text"
                name='certificate1SerialNumber'
                value={formData.certificate1SerialNumber || ''}
                onChange={handleChange}
                placeholder='12345678910'
                className='bg-transparent w-full h-full outline-none'
              />
            </div>
            <div className='px-5 py-5 border-2 w-[30%] relative rounded-lg'>
              <p className='text-sm text-zinc-900 absolute -top-3 bg-gray-50 px-2'>Issueing Institute</p>
              <input
                type="text"
                name='certificate1IssueingInstitute'
                value={formData.certificate1IssueingInstitute || ''}
                onChange={handleChange}
                placeholder='ABCD Institute'
                className='bg-transparent w-full h-full outline-none'
              />
            </div>
          </div>
          {/* certificate 2 */}
          <div className='w-full flex items-center justify-between'>
            <div className='px-5 py-5 border-2 w-[30%] relative rounded-lg'>
              <p className='text-sm text-zinc-900 absolute -top-3 bg-gray-50 px-2'>Certificate 2 Name</p>
              <input
                type="text"
                name='certificate2Name'
                value={formData.certificate2Name || ''}
                onChange={handleChange}
                placeholder='certificate name'
                className='bg-transparent w-full h-full outline-none'
              />
            </div>
            <div className='px-5 py-5 border-2 w-[30%] relative rounded-lg'>
              <p className='text-sm text-zinc-900 absolute -top-3 bg-gray-50 px-2'>Serial number</p>
              <input
                type="text"
                name='certificate2SerialNumber'
                value={formData.certificate2SerialNumber || ''}
                onChange={handleChange}
                placeholder='12345678910'
                className='bg-transparent w-full h-full outline-none'
              />
            </div>
            <div className='px-5 py-5 border-2 w-[30%] relative rounded-lg'>
              <p className='text-sm text-zinc-900 absolute -top-3 bg-gray-50 px-2'>Issueing Institute</p>
              <input
                type="text"
                name='certificate2IssueingInstitute'
                value={formData.certificate2IssueingInstitute || ''}
                onChange={handleChange}
                placeholder='ABCD Institute'
                className='bg-transparent w-full h-full outline-none'
              />
            </div>
          </div>
        
        </div>


        {/* acheivements */}
        <div className='px-5 py-5 border-2 w-[30%] relative rounded-xl'>
          <p className='text-xl poppins-semi-bold text-zinc-900 absolute -top-3 bg-gray-50 px-2'>Acheivements</p>
          <input
            type="text"
            name='acheivements'
            value={formData.acheivements}
            onChange={handleChange}
            className='bg-transparent w-full h-full outline-none'
            placeholder='Acheivement1-position Acheivement2-position ...'
          />
        </div>

        {/* summary */}
        <div className='px-5 py-5 border-2 w-[50%] h-[25%] relative rounded-lg'>
          <p className='text-xl text-zinc-900 absolute -top-3 bg-gray-50 px-2 poppins-semi-bold'>Summary</p>
          <textarea
            name="summary"
            value={formData.summary}
            onChange={handleChange}
            placeholder='Resume summary'
            className='bg-transparent w-full h-full outline-none resize-none'
          />
        </div>
        <button
          type="submit"
          className='mt-5 bg-blue-500 text-white px-6 py-2 rounded-lg self-end'
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ResumeComponent;

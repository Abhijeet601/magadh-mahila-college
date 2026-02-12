import React, { useState } from 'react';

const Committees = () => {
  const [expandedYear, setExpandedYear] = useState(null);

  const years = ['2025-26', '2023-24', '2022-23', '2021-22', '2020-21'];

  const academicAuditCommittee202021 = [
    { sl: '01', name: 'Prof. (Dr.) Namita Kumari', designation: 'Principal University Professor', department: '—————' },
    { sl: '02', name: 'Dr. Shyam Deo Yadav', designation: 'Bursar Associate Professor', department: 'Chemistry' },
    { sl: '03', name: 'Prof. Anjum Fatma', designation: 'University Professor', department: 'HoD, Chemistry' },
    { sl: '04', name: 'Dr. Bandana Singh Convener', designation: 'University Professor', department: 'Home Science' },
    { sl: '05', name: 'Dr. Pushpa Sinha', designation: 'Associate Professor', department: 'HoD, Economics' },
  ];

  const advisoryCommittee202021 = [
    { sl: '01', name: 'Prof. (Dr.) Namita Kumari', designation: 'Principal', department: '' },
    { sl: '02', name: 'Dr. Shyam Deo Yadav', designation: 'Bursar Coordinator-B.Com.', department: '' },
    { sl: '03', name: 'Dr. Kumari Aruna', designation: 'HoD, Hindi', department: '' },
  ];

  const buildingCommittee202021 = [
    { sl: '1', name: 'Prof. (Dr.) Namita Kumari', designation: 'Principal', department: '' },
    { sl: '2', name: 'Dr. Shyam Deo Yadav', designation: 'Bursar, Coordinator-B.Com.', department: 'Chemistry' },
    { sl: '3', name: 'Mr. Parimal Kumar Khan', designation: 'Development Officer, PU', department: '' },
  ];

  const disciplineCommittee202526 = [
    { sl: '1', name: 'Prof. (Dr.) Nagendra Prasad Verma', designation: 'Principal', department: 'Main Building – Ground Floor' },
    { sl: '2', name: 'Prof. (Dr.) Pushpalata Kumari', designation: 'Coordinator IQAC', department: 'Convener' },
    { sl: '3', name: 'Dr. Rishu Raj', designation: 'HOD, Political Science', department: 'In-charge: North Corridor' },
    { sl: '4', name: 'Dr. Asha Kumari', designation: 'Dept. of Hindi', department: 'In-charge: East Corridor' },
    { sl: '5', name: 'Dr. Rizwan', designation: 'Dept. of Urdu', department: 'In-charge: South Corridor' },
    { sl: '6', name: 'Dr. Ashish Kumar', designation: 'Dept. of Economics', department: 'In-charge: North Corridor' },
    { sl: '7', name: 'Dr. Sonali Kumari', designation: 'Dept. of Psychology', department: 'In-charge: South Corridor' },
    { sl: '8', name: 'Dr. Ranjana Kumari', designation: 'Dept. of Psychology', department: 'In-charge: West Corridor' },
    { sl: '9', name: 'Ms. Ranjana Yadav', designation: 'Dept. of Philosophy', department: 'In-charge: West Corridor' },
    { sl: '10', name: 'Dr. Veena Kumari', designation: 'Dept. of Sociology', department: 'In-charge: East Corridor' },
    { sl: '11', name: 'Dr. Rajendra Kumar', designation: 'Dept. of Sociology', department: 'In-charge: East Corridor' },
    { sl: '12', name: 'Dr. Usha Kumari', designation: 'Dept. of Chemistry', department: 'Convener, Main Building – 1st Floor' },
    { sl: '13', name: 'Dr. Binay Kumar', designation: 'Dept. of Mathematics', department: 'In-charge: South Corridor' },
    { sl: '14', name: 'Dr. Priti Mishra', designation: 'Dept. Physics', department: 'In-charge: South Corridor' },
    { sl: '15', name: 'Dr. Archana Sinha', designation: 'Dept. of Chemistry', department: 'In-charge: North Corridor' },
    { sl: '16', name: 'Dr. Deepak Kumar', designation: 'Dept. of Chemistry', department: 'In-charge: North Corridor' },
    { sl: '17', name: 'Dr. Sonu Rani', designation: 'Dept. of Physics', department: 'In-charge: East Corridor' },
  ];

  const academicAuditCommittee202526 = [
    { sl: '01', name: 'Prof. (Dr.) Nagendra Prasad Verma', designation: 'Principal', department: '' },
    { sl: '02', name: 'Dr. Binay Kumar Bimal', designation: 'Bursar', department: '' },
    { sl: '03', name: 'Prof. (Dr.) Pushpalata Kumari', designation: 'Coordinator IQAC', department: 'Department of Political Science' },
    { sl: '04', name: 'Dr. Surendra Kumar Prasad', designation: 'Convener', department: 'Department of Botany' },
    { sl: '05', name: 'Dr. Archana Jaiswal', designation: 'HOD', department: 'Department of English' },
    { sl: '06', name: 'Ms. Nidhi Singh', designation: '', department: 'Department of Psychology' },
    { sl: '07', name: 'Dr. Chandan Chandra Chunna', designation: '', department: 'Department of Economics' },
    { sl: '08', name: 'Dr. Reena Kumari', designation: '', department: 'Department of Chemistry' },
    { sl: '09', name: 'Dr. Priyamvada', designation: '', department: 'Department of Psychology' },
    { sl: '10', name: 'Dr. Anju Kumari', designation: '', department: 'Department of Sociology' },
    { sl: '11', name: 'Ms. Ranjana Yadav', designation: '', department: 'Department of Philosophy' },
  ];

  const buildingCommittee202526 = [
    { sl: '01', name: 'Prof. (Dr.) Nagendra Prasad Verma', designation: 'Principal', department: '' },
    { sl: '02', name: 'Dr. Binay Kumar Bimal', designation: 'Bursar', department: '' },
    { sl: '03', name: 'Dr. Khagendra Kumar', designation: 'Development Officer, P. U.', department: '' },
    { sl: '04', name: 'Er. Sachin Dayal', designation: 'University Engineer, P. U.', department: '' },
    { sl: '05', name: 'Dr. Pushpanjali Khare', designation: 'HOD, Department of Botany', department: '' },
    { sl: '06', name: 'Dr. Shyam Deo Yadav', designation: 'HOD, Department of Chemistry', department: '' },
    { sl: '07', name: 'Dr. Surendra Kumar Prasad', designation: 'Department of Botany', department: '' },
    { sl: '08', name: 'Dr. Manish Kumar Verma', designation: 'Department of Physics', department: '' },
    { sl: '09', name: 'Dr. Shipra Prabha', designation: 'HOD, Department of Hindi', department: '' },
    { sl: '10', name: 'Dr. Priti Mishra', designation: 'Department of Physics', department: '' },
    { sl: '11', name: 'Dr. Sweta Sharan', designation: 'HOD, Department of Economics', department: '' },
    { sl: '12', name: 'Mr. Ravi Prakash', designation: 'Head Assistant', department: '' },
  ];

  const naacCommittee202526 = [
    { sl: '01', name: 'Prof. (Dr.) Nagendra Prasad Verma', designation: 'Principal', department: '' },
    { sl: '02', name: 'Prof. (Dr.) Pushpalata Kumari', designation: 'Professor', department: 'Coordinator, IQAC and NAAC' },
    { sl: '03', name: 'Dr. Pushpanjali Khare', designation: 'Associate Prof. & HOD, Botany', department: 'Member' },
    { sl: '04', name: 'Dr. Archana Jaiswal', designation: 'Associate Prof. & HOD, English', department: 'Member' },
    { sl: '05', name: 'Dr. Shyam Deo Yadav', designation: 'Associate Prof. & HOD, Chemistry', department: 'Member' },
    { sl: '06', name: 'Dr. Manish Kumar Verma', designation: 'Asst. Prof. Physics', department: 'Member' },
    { sl: '07', name: 'Dr. Sonu Rani', designation: 'Asst. Prof. Physics', department: 'Member, In-charge of Criteria I' },
    { sl: '08', name: 'Dr. Sonali Kumari', designation: 'Asst. Prof. Psychology', department: 'Member' },
    { sl: '09', name: 'Dr. Mita Malkhandi', designation: 'Asst. Prof. Economics', department: 'Member' },
    { sl: '10', name: 'Dr. Minu Minj', designation: 'Asst. Prof. Sociology', department: 'Member' },
    { sl: '11', name: 'Dr. Madhu Kumari Gupta', designation: 'Asst. Prof. Chemistry', department: 'Member, In-charge of Criteria II' },
    { sl: '12', name: 'Dr. Priyamvada', designation: 'Asst. Prof. Psychology', department: 'Member' },
    { sl: '13', name: 'Dr. Rajendra Kumar', designation: 'Asst. Prof. Sociology', department: 'Member' },
    { sl: '14', name: 'Dr. Seema Prakash', designation: 'Asst. Prof. Home Science', department: 'Member' },
    { sl: '15', name: 'Dr. Amrita Prasad', designation: 'Asst. Prof. Chemistry', department: 'Member, In-charge of Criteria III' },
    { sl: '16', name: 'Dr. Suchita Arpan', designation: 'Asst. Prof. Philosophy', department: 'Member' },
    { sl: '17', name: 'Dr. Ashish Kumar', designation: 'Asst. Prof. Economics', department: 'Member' },
    { sl: '18', name: 'Dr. Preeti Kumari', designation: 'Asst. Prof. Hindi', department: 'Member' },
    { sl: '19', name: 'Dr. Sujata Kumari', designation: 'Assistant Prof. & HOD, Zoology', department: 'Member, In-charge of Criteria IV' },
    { sl: '20', name: 'Dr. Jyoti Dubey', designation: 'Assistant Prof. Hindi', department: 'Member' },
    { sl: '21', name: 'Dr. Rishu Raj', designation: 'Asst. Prof., Political Science', department: 'Member' },
    { sl: '22', name: 'Dr. Chandan Chandra Chunna', designation: 'Asst. Prof. Economics', department: 'Member' },
    { sl: '23', name: 'Dr. Sweta Sharan', designation: 'Asst. Prof. Economics', department: 'Member, In-charge of Criteria V' },
    { sl: '24', name: 'Dr. Nidhi Singh', designation: 'Asst. Prof. Psychology', department: 'Member' },
    { sl: '25', name: 'Dr. Anju Kumari', designation: 'Asst. Prof. Sociology', department: 'Member' },
    { sl: '26', name: 'Dr. Deepak Kumar', designation: 'Asst. Prof. Chemistry', department: 'Member' },
    { sl: '27', name: 'Dr. Binay Kumar', designation: 'Asst. Prof. Mathematics', department: 'Member, In-charge of Criteria VI' },
    { sl: '28', name: 'Dr. Kavita Kumari', designation: 'Asst. Prof. Home Science', department: 'Member' },
    { sl: '29', name: 'Ms. Ranjana Yadav', designation: 'Asst. Prof. Philosophy', department: 'Member' },
    { sl: '30', name: 'Dr. Archna Kumari', designation: 'Asst. Prof. Sociology', department: 'Member' },
    { sl: '31', name: 'Dr. Namrata', designation: 'Assistant Prof. Psychology', department: 'Member, In-charge of Criteria VII' },
    { sl: '32', name: 'Dr. Kavita Chowdhary', designation: 'Asst. Prof. Psychology', department: 'Member' },
    { sl: '33', name: 'Dr. Pankaj Kumar Baitha', designation: 'Asst. Prof. Physics', department: 'Member' },
    { sl: '34', name: 'Dr. Ranjana Kumari', designation: 'Asst. Prof. Psychology', department: 'Member' },
    { sl: '35', name: 'Mr. Ravi Prakash', designation: 'Head Assistant', department: 'Technical Assistance' },
    { sl: '36', name: 'Mr. Arun Kumar', designation: 'Accountant – in-charge', department: 'Technical Assistance' },
    { sl: '37', name: 'Mr. Som Shekhar', designation: 'Office Assistant', department: 'Technical Assistance' },
    { sl: '38', name: 'Mr. Shambhu Kumar Mahto', designation: 'Office Assistant', department: 'Technical Assistance' },
    { sl: '39', name: 'Mr. Gajendra Prasad', designation: 'Office Assistant', department: 'Technical Assistance' },
  ];

  const nirfAisheAicteCommittee202526 = [
    { sl: '01', name: 'Prof. (Dr.) Nagendra Prasad Verma', designation: 'Principal', department: '' },
    { sl: '02', name: 'Dr. Manish Kumar Verma', designation: 'Nodal Officer, AISHF / NIRF', department: 'Department of Physics' },
    { sl: '03', name: 'Ms. Nidhi Singh', designation: '', department: 'Department of Psychology' },
    { sl: '04', name: 'Dr. Suchita Arpan', designation: 'Nodal Officer, AICTE', department: 'HOD, Department of Philosophy' },
    { sl: '05', name: 'Dr. Sweta Sharan', designation: 'HOD', department: 'Department of Economics' },
    { sl: '06', name: 'Dr. Anju Kumari', designation: '', department: 'Department of Sociology' },
    { sl: '07', name: 'Dr. Kavita Chowdhary', designation: '', department: 'Department of Psychology' },
    { sl: '08', name: 'Dr. Reena Kumari', designation: '', department: 'Department of Chemistry' },
    { sl: '09', name: 'Mr. Som Shekhar', designation: 'IT Staff', department: '' },
  ];



  const researchJournalJigyasaCommittee202526 = [
    { sl: '01', name: 'Prof. (Dr.) Nagendra Prasad Verma', designation: 'Principal, Chief Editor', department: '' },
    { sl: '02', name: 'Prof. (Dr.) Pushpalata Kumari', designation: 'IQAC Coordinator & Editor', department: 'Department of Political Science' },
  ];

  const contractualEngagementOutsourcingCommittee202526 = [
    { sl: '01', name: 'Prof. (Dr.) Nagendra Prasad Verma', designation: 'Principal', department: '' },
    { sl: '02', name: 'Dr. Binay Kumar Bimal', designation: 'Bursar', department: '' },
    { sl: '03', name: 'Prof. (Dr.) Pushpalata Kumari', designation: 'Coordinator IQAC', department: 'Department of Political Science' },
    { sl: '04', name: 'Dr. Shyam Deo Yadav', designation: 'Convener', department: 'HOD, Department of Chemistry' },
    { sl: '05', name: 'Dr. Pushpanjali Khare', designation: 'HOD, Department of Botany', department: '' },
    { sl: '06', name: 'Dr. Surendra Kumar Prasad', designation: 'Coordinator, Department of B. Com.', department: '' },
    { sl: '07', name: 'Dr. Manish Kumar Verma', designation: 'Coordinator, Department of BCA', department: '' },
    { sl: '08', name: 'Dr. Suchita Arpan', designation: 'Coordinator, Department of BBA', department: '' },
    { sl: '09', name: 'Dr. Rishu Raj', designation: 'HOD, Department of Political Sc.', department: '' },
    { sl: '10', name: 'Mr. Ravi Prakash', designation: 'Head Assistant', department: '' },
    { sl: '11', name: 'Mr. Arun Kumar', designation: 'Accountant – in-charge', department: '' },
  ];

  const allCommittees = {
    '2020-21': [
      { title: 'Academic Audit Committee', data: academicAuditCommittee202021 },
      { title: 'Advisory Committee', data: advisoryCommittee202021 },
      { title: 'Building Committee', data: buildingCommittee202021 },
    ],
    '2021-22': [
      { title: 'Academic Audit Committee', data: academicAuditCommittee202021 },
      { title: 'Advisory Committee', data: advisoryCommittee202021 },
      { title: 'Building Committee', data: buildingCommittee202021 },
    ],
    '2022-23': [
      { title: 'Academic Audit Committee', data: academicAuditCommittee202021 },
      { title: 'Advisory Committee', data: advisoryCommittee202021 },
      { title: 'Time Table Committee', data: buildingCommittee202021 },
    ],
    '2023-24': [
      { title: 'Academic Audit Committee', data: academicAuditCommittee202021 },
      { title: 'Advisory Committee', data: advisoryCommittee202021 },
      { title: 'Time Table Committee', data: buildingCommittee202021 },
    ],
    '2025-26': [
      { title: 'Discipline Committee', data: disciplineCommittee202526 },
      { title: 'Academic Audit Committee', data: academicAuditCommittee202526 },
      { title: 'Building Committee', data: buildingCommittee202526 },
      { title: 'NAAC Committee', data: naacCommittee202526 },
      { title: 'NIRF/AISHE/AICTE Committee', data: nirfAisheAicteCommittee202526 },
      { title: 'Contractual Engagement/Outsourcing Committee', data: contractualEngagementOutsourcingCommittee202526 },
      { title: 'Research Journal Jigyasa Committee', data: researchJournalJigyasaCommittee202526 },
    ],
  };

  const TableComponent = ({ data, columns }) => (
    <div className="overflow-x-auto my-4">
      <table className="w-full border-collapse border border-gray-400">
        <thead className="bg-blue-100">
          <tr>
            {columns.map((col, idx) => (
              <th key={idx} className="border border-gray-400 px-4 py-2 text-left text-sm">{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              {columns.map((col, colIdx) => (
                <td key={colIdx} className="border border-gray-400 px-4 py-2 text-sm">
                  {row[col.toLowerCase().replace(/\s+/g, '')] || row[col.toLowerCase()] || ''}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-2">College Committees</h1>
      <p className="text-gray-600 mb-8">Administrative Structure and Committee Compositions</p>

      <div className="space-y-4">
        {years.map((year) => (
          <div key={year} className="border rounded-lg shadow-md">
            <button
              onClick={() => setExpandedYear(expandedYear === year ? null : year)}
              className="w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold text-lg flex justify-between items-center hover:bg-blue-700 transition"
            >
              <span>Academic Year {year}</span>
              <span className="text-xl">{expandedYear === year ? '−' : '+'}</span>
            </button>

            {expandedYear === year && (
              <div className="px-6 py-6 bg-white">
                {allCommittees[year].map((committee, idx) => (
                  <div key={idx} className="mb-8">
                    <h3 className="text-2xl font-bold text-blue-600 mb-4">{committee.title}</h3>
                    <TableComponent 
                      data={committee.data} 
                      columns={['Sl', 'Name', 'Designation', 'Department']}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-12 bg-blue-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Committee Structure Overview</h2>
        <p className="text-gray-700 mb-4">
          The college maintains various committees to ensure effective administration and academic excellence. These committees include:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Academic Audit Committee - Monitors academic quality and performance</li>
          <li>Advisory Committee - Comprises heads of departments and coordinators</li>
          <li>Building Committee - Oversees infrastructure and maintenance</li>
          <li>Discipline Committee - Maintains campus discipline and conduct</li>
          <li>NAAC Committee - Manages accreditation and quality assurance</li>
          <li>Finance and Development Committee - Handles financial matters</li>
          <li>Grievance Redressal Committees - Addresses student and staff concerns</li>
          <li>Research and Publication Committees - Promotes scholarly activities</li>
        </ul>
      </div>
    </div>
  );
};

export default Committees;

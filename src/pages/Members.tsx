import React from "react";

const membersData = {
  presidentPeriod: [
    { name: "JC. Muralidhar Goyanka", year: "1962-1963" },
    { name: "JC. Natwar Nath Agrawal", year: "1964" },
    { name: "JC. Gopi Nath Verma", year: "1965" },
    { name: "JC. Shambhu Nath Agrawal", year: "1966" },
    { name: "JC. C.S. Srivastava", year: "1967" },
    { name: "JC. Kailash Nath Khandelwal", year: "1698" },
    { name: "JC. Kishan Budhiya", year: "1969" },
    { name: "JC. Jagdish Chandra Agrawal", year: "1970" },
    { name: "JC. Dr. Shashi Bhushan Agrawal", year: "1971" },
    { name: "JC. Ramesh Chandra Goyal", year: "1972" },
    { name: "JC. Pyare Lal Agrawal", year: "1973" },
    { name: "JC. Raj Kumar Seth", year: "1974" },
    { name: "JC. Hanuman Das Agrawal", year: "1975" },
    { name: "JC. Prabhu Narayan Srivastava", year: "1976" },
    { name: "JC. Mata Prasad Jaiswal", year: "1977" },
    { name: "JC. Kailash Nath Agrawal", year: "1978" },
    { name: "JC. Narayan Das Agrawal", year: "1979" },
    { name: "JC. Mukund Lal Agrawal", year: "1980" },
    { name: "JC. Jagdish Prasad Jaiswal", year: "1981" },
    { name: "JC. Raj Krishan Agrawal", year: "1982" },
    { name: "JC. Sargam Lal Agrawal", year: "1983" },
    { name: "JC. Vinod Kumar Agrawal", year: "1984" },
    { name: "JC. Madan Mohan Srivastava", year: "1985" },
    { name: "JC. Manhajya Lal Khatri", year: "1986" },
    { name: "JC. Vinay Budhiya", year: "1987" },
    { name: "JC. Anil Kumar Agrawal", year: "1988" },
    { name: "JC. Hemant Singhaniya", year: "1989" },
    { name: "JC. Gopal Das Tandon", year: "1990" },
    { name: "JC. Kuldeep Khandelwal", year: "1991" },
    { name: "JC. Raj Kumar Gupta", year: "1992" },
    { name: "JC. Keshav Chandra Agrawal", year: "1993" },
    { name: "JC. Vinay Agrawal", year: "1994" },
    { name: "JC. Anurag Jaiswal", year: "1995" },
    { name: "JC. Raj Kumar Raidani", year: "1996" },
    { name: "JC. Devendra Pratap Singh", year: "1997" },
    { name: "JC. Sanjay Malviya", year: "1998" },
    { name: "JC. Vijay Gupta", year: "1999-2000" },
    { name: "JC. Manoj Agrawal", year: "2001-2002" },
    { name: "JC. Anil Agrawal", year: "2003" },
    { name: "JC. Manish Agrawal", year: "2004" },
    { name: "JC. Prabhat Agrawal", year: "2005-2006" },
    { name: "JC. Bhuvan Vanshal", year: "2007" },
    { name: "JC. Ashish Agrawal", year: "2008-2009" },
    { name: "JC. Aswani Srivastava", year: "2010" },
    { name: "JC. JC. Lolark Singh", year: "2011-Till Now" }
  ],
  secretaryPeriod: [
    { name: "JC. Kailashnath Khendelwal", year: "1962-1963" },
    { name: "JC. Shail Kumar Agrawal", year: "1964" },
    { name: "JC. Jagdish Chandra Agrawal", year: "1965" },
    { name: "JC. OM Prakash Singhaniya", year: "1966" },
    { name: "JC. Raj Kumar Seth", year: "1967" },
    { name: "JC. Shiv Dadhich Singh", year: "1968" },
    { name: "JC. Hanuman Das Agrawal", year: "1969" },
    { name: "JC. Shyam Kumar Gupt", year: "1970" },
    { name: "JC. Radhey Shyam Joshi", year: "1971" },
    { name: "JC. Vidhyadhar Srivastava", year: "1972" },
    { name: "JC. Kailash Nath Agrawal", year: "1973" },
    { name: "JC. Hari Om Bhrgav", year: "1974" },
    { name: "JC. Sangam Lal Agrawal", year: "1975" },
    { name: "JC. Raj Krishan Agrawal", year: "1976" },
    { name: "JC. Narayan Das Agrawal", year: "1977" },
    { name: "JC. Satish Chandra Srivastava", year: "1978" },
    { name: "JC. Madan Mohan Srivastava", year: "1979" },
    { name: "JC. Vinay Budhiya", year: "1980" },
    { name: "JC. Harvindar Singh", year: "1981" },
    { name: "JC. Anil Kumar Agrawal", year: "1982" },
    { name: "JC. Pramod Kumar Agrawal", year: "1983" },
    { name: "JC. Keshav Chandra Agrawal", year: "1984" },
    { name: "JC. Shri Gopal Agrawal", year: "1985" },
    { name: "JC. Sohan Lal Seksaria", year: "1986" },
    { name: "JC. Hemant Singhaniya", year: "1987" },
    { name: "JC. Gopal Das Tandon", year: "1988" },
    { name: "JC. Vinay Agrawal", year: "1989" },
    { name: "JC. Santosh Jaiswal", year: "1990" },
    { name: "JC. Anup Purwar", year: "1991" },
    { name: "JC. Sanjay Malviya", year: "1992" },
    { name: "JC. Radhesh Barnwal", year: "1993" },
    { name: "JC. Ashok Singh/Rajesh Singh", year: "1994" },
    { name: "JC. Anup Jaiswal", year: "1995" },
    { name: "JC. Sudhir Jaiswal", year: "1996" },
    { name: "JC. Anuj Jaiswal", year: "1997" },
    { name: "JC. Jagjeet Jaiswal", year: "1998" },
    { name: "JC. Naveen Srivastava", year: "1999-2000" },
    { name: "JC. Manu Datta Kaushik", year: "2001" },
    { name: "JC. Arun Agrawal", year: "2002" },
    { name: "JC. Rajesh Agrawal", year: "2003" },
    { name: "JC. Raj Kumar Tandon", year: "2004" },
    { name: "JC. Nand Lal Maurya", year: "2005-2006" },
    { name: "JC. Ashish Gupta", year: "2007" },
    { name: "JC. Sandeep Bansal", year: "2008-2009" },
    { name: "JC. Amit Shukla", year: "2010" },
    { name: "JC. Ghanshyam", year: "2011-Till Now" }
  ],
  managerPeriod: [
    { name: "JC. Kishan Budhiya", year: "1964" },
    { name: "JC. Kishan Budhiya / C.S. Srivastava", year: "1965" },
    { name: "JC. C.S. Srivastava", year: "1966" },
    { name: "JC. Triloki Nath Purwar", year: "1967-1968" },
    { name: "JC. Dr. Shashi Bhushan Agrawal", year: "1969-1970" },
    { name: "JC. Shambhu Nath Agrawal", year: "1971-1972" },
    { name: "JC. Hanuman Das Agrawal", year: "1973-1974" },
    { name: "JC. Kailash Nath Agrawal", year: "1975-1976" },
    { name: "JC. Pyare Lal Agrawal", year: "1977" },
    { name: "JC. Mukund Lal Agrawal", year: "1978-1979" },
    { name: "JC. Sangam Lal Agrawal", year: "1980-1981" },
    { name: "JC. Madan Mohan", year: "1982" },
    { name: "JC. Madan Mohan/Narayan Das", year: "1983" },
    { name: "JC. Narayan Das Agrawal", year: "1984-1985" },
    { name: "JC. Vinay Das Tondon", year: "1986" },
    { name: "JC. Vijay Tandon/ Vinod Guyanaka", year: "1987" },
    { name: "JC. Vinod Goyanka", year: "1988" },
    { name: "JC. Vinod Goyanka/ Bharat Bhushan Goyanka", year: "1989" },
    { name: "JC. Bharat Bhushan Goyanka", year: "1990" },
    { name: "JC. Bharat BhushanGoyanka/Ravindra Pal Singh", year: "1991" },
    { name: "JC. Ravindra Pal Singh", year: "1992" },
    { name: "JC. Ravindra Pal Singh/Vinay Bhudhiya", year: "1993" },
    { name: "JC. Vinay Bhudhiya/Kailash Singh", year: "1994" },
    { name: "JC. Kailash Singh/Sajay Malviya", year: "1995" },
    { name: "JC. Sanjay Malviya", year: "1996" },
    { name: "JC. Sanjay Malviya/Manoj Agrawal", year: "1997" },
    { name: "JC. Manoj Agrawal", year: "1998-1999" },
    { name: "JC. Naveen Kumar Srivastava", year: "2000" },
    { name: "JC. Devendra Pratap Singh", year: "2001-2004" },
    { name: "JC. Dharam Pal Singh", year: "2005-2009" },
    { name: "JC. Dharam Pal Singh/Renu Agrawal", year: "2010" },
    { name: "JC. Renu Agrawal", year: "2011-Till Now" }
  ]
};

const MembersTable = () => {
  return (
    <div className="py-16">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <h2 className="text-2xl text-[#ffc847] font-bold md:text-4xl font-martel text-center">
          Jaycee Members List (1962 Till Now)
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
          {/* President Period Table */}
          <div className="bg-neutral-800 p-4 rounded-lg">
            <h3 className="text-lg font-bold text-center">President Period</h3>
            <table className="w-full mt-4 border-collapse border border-gray-700">
              <thead>
                <tr>
                  <th className="border border-gray-700 px-2 py-1">Name</th>
                  <th className="border border-gray-700 px-2 py-1">Year</th>
                </tr>
              </thead>
              <tbody>
                {membersData.presidentPeriod.map((member, index) => (
                  <tr key={index}>
                    <td className="border border-gray-700 px-2 py-1">
                      {member.name}
                    </td>
                    <td className="border border-gray-700 px-2 py-1">
                      {member.year}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Secretary Period Table */}
          <div className="bg-neutral-800 p-4 rounded-lg">
            <h3 className="text-lg font-bold text-center">Secretary Period</h3>
            <table className="w-full mt-4 border-collapse border border-gray-700">
              <thead>
                <tr>
                  <th className="border border-gray-700 px-2 py-1">Name</th>
                  <th className="border border-gray-700 px-2 py-1">Year</th>
                </tr>
              </thead>
              <tbody>
                {membersData.secretaryPeriod.map((member, index) => (
                  <tr key={index}>
                    <td className="border border-gray-700 px-2 py-1">
                      {member.name}
                    </td>
                    <td className="border border-gray-700 px-2 py-1">
                      {member.year}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Manager Period Table */}
          <div className="bg-neutral-800 p-4 rounded-lg">
            <h3 className="text-lg font-bold text-center">Manager Period</h3>
            <table className="w-full mt-4 border-collapse border border-gray-700">
              <thead>
                <tr>
                  <th className="border border-gray-700 px-2 py-1">Name</th>
                  <th className="border border-gray-700 px-2 py-1">Year</th>
                </tr>
              </thead>
              <tbody>
                {membersData.managerPeriod.map((member, index) => (
                  <tr key={index}>
                    <td className="border border-gray-700 px-2 py-1">
                      {member.name}
                    </td>
                    <td className="border border-gray-700 px-2 py-1">
                      {member.year}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembersTable;

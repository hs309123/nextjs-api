import Image from "next/image"
import Link from "next/link"

interface employee {
    id: string,
    employee_name: string,
    employee_salary: number,
    employee_age: number,
    profile_image?: string
}

const EmployeeCard: React.FC<{ employeeData: employee }> = ({ employeeData }) => {
    return (
        <div className="w-[300px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.3)] shadow-[#64748b] rounded-xl p-4">
            {employeeData.profile_image ?
                <Image src={employeeData.profile_image || ""} alt={employeeData.employee_name} height={200} />
                : <div className="bg-slate-500 rounded-lg h-[200px] w-full m-auto flex justify-center items-center mb-4" >No Profile Image</div>
            }
            <div className="grid grid-cols-2">
                <h1>Name</h1>
                <h1>: {employeeData.employee_name}</h1>
                <p>Salary</p>
                <p>: {employeeData.employee_salary}</p>
                <p>Age</p>
                <p>: {employeeData.employee_age}</p>
            </div>
            <button className="bg-slate-600 w-full py-2 mt-2 rounded-lg">
                <Link href={`/employee/${employeeData.id}`}>View Details</Link>
            </button>
        </div>
    )
}

export default EmployeeCard

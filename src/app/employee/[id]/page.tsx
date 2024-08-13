
// /employee/[id]/page.tsx
import Image from "next/image"
import { notFound } from "next/navigation"

const getEmployeeData = async (id: string) => {
    try {
        let response = await fetch(`${process.env.PUBLIC_URL}/api/employees/${id}`, { cache: "no-store" })

        if (response.ok) {
            const employeeData = await response.json()
            return employeeData.employeeData.data
        }
        else {
            throw new Error("There is some Error")
        }
    } catch (error) {
        throw new Error("There is some Error")
    }
}

const EmployeePage = async ({ params }: { params: { id: string } }) => {
    try {
        const id = params.id
        const employeeData = await getEmployeeData(id)
        return (
            <div>
                <h1 className="text-center text-2xl my-10">Employee Details</h1>
                <div className="mx-20">
                    {employeeData.profile_image ?
                        <Image src={employeeData.profile_image || ""} alt={employeeData.employee_name} height={200} />
                        : <div className="bg-slate-500 rounded-lg h-[200px] w-full m-auto flex justify-center items-center mb-4" >No Profile Image</div>
                    }
                    <div className="grid grid-cols-2 mt-2">
                        <h1>Name</h1>
                        <h1>: {employeeData.employee_name}</h1>
                        <p>Salary</p>
                        <p>: {employeeData.employee_salary}</p>
                        <p>Age</p>
                        <p>: {employeeData.employee_age}</p>
                    </div>
                </div>
            </div>
        )
    } catch (error) {
        notFound()
    }
}

export default EmployeePage
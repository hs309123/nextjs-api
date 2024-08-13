
// /employee/page.tsx
import EmployeeCard from "@/Components/Employee/EmployeeCard";
import { notFound } from "next/navigation";

interface employee {
    id: string,
    employee_name: string,
    employee_salary: number,
    employee_age: number,
    profile_image?: string
}

const getAllEmployeeData = async () => {
    try {
        const allData = await fetch(`${process.env.PUBLIC_URL}/api/employees`)
        const employeeData = await allData.json()

        return employeeData.employeeData
    } catch (error) {
        console.log(error);
        throw new Error("There is some Error")
    }
}

const Learn = async () => {
    try {
        const employeeData = await getAllEmployeeData()

        return (
            <div className="py-16">
                <h1 className="text-2xl text-center">Hi Guys! Here we'll learn to get the request from our backend!!</h1>
                <div className="flex justify-center items-center flex-wrap gap-8 mt-10">
                    {employeeData.map((emp: employee) => (
                        <EmployeeCard key={emp.id} employeeData={emp} />
                    ))}
                </div>
            </div>
        )
    } catch (error) {
        notFound()
    }

}
export default Learn

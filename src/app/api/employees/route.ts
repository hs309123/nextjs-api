
//   /api/employees/route.ts
export async function GET(request: Request) {
    try {
        const data = await fetch("https://dummy.restapiexample.com/api/v1/employees", { cache: "no-store" })
        const employeeData = await data.json()

        return Response.json({ employeeData: employeeData.data })
    } catch (error) {
        return Response.json({ error, message: "Not able to Get" }, {
            status: 500
        })
    }
}

// /api/employees/[id]/route.ts
export async function GET(request: Request, { params }: { params: { id: string } }) {
    const id = params.id
    try {
        const data = await fetch(`https://dummy.restapiexample.com/api/v1/employee/${id}`)
        const employeeData = await data.json()
        return Response.json({ employeeData })
    } catch (error) {
        return Response.json({ error, message: "Cannot get Employee" }, {
            status: 500
        })
    }
}
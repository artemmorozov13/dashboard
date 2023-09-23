import { RegisterByEmail } from "Features/RegisterByEmail"
import { Layout } from "Widgets/Layout"
import { FC } from "react"

const RegisterPage: FC = () => {
    return (
        <Layout>
            <RegisterByEmail />
        </Layout>
    )
}

export default RegisterPage
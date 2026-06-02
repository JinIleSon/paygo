import AuthLayout from "../../components/layout/AuthLayout.tsx";

function LoginPage(){
    return (
        <AuthLayout>
            <div className="flex h-screen">
                <div className="flex-1">
                    브랜드
                </div>
                <div className="w-[740px] bg-amber-50">
                    폼
                </div>
            </div>
        </AuthLayout>
    )
}

export default LoginPage
import AuthNavigation from "./AuthNavigation"

const AuthLayout = ({children}) => {



    return (
        <section className="auth-section">
            <div className="auth-cont">
            <nav className="auth-nav">
                <AuthNavigation text="Login" path="/auth/login"/>
                <AuthNavigation text="Registration" path="/auth/registration" />
            </nav>
            <main className="auth-main">{children}</main>

            </div>
         </section>
    )
} 

export default AuthLayout
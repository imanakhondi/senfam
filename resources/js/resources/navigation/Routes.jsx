import { Route, Routes } from "react-router-dom";
import * as Pages from "../Pages";
import PanelLayout from "../layout/PanelLayout";

export default function authRoute() {
    return (
        <Routes>
            <Route path="/" element={<Pages.HomePage />} />
            <Route path="login" element={<Pages.LoginUser />} />
            <Route path="signup" element={<Pages.Signup />} />
            <Route path="forget-password" element={<Pages.ForgetPassword />} />
            <Route path="panel" element={<PanelLayout />}>
                <Route path="dashboard" element={<Pages.DashboardPage />} />
                <Route path="users" element={<Pages.Users />} />
                <Route
                    path="change-password"
                    element={<Pages.ChangePassword />}
                />
                <Route path="user/show/:id" element={<Pages.ShowUser />} />
                <Route path="user/add" element={<Pages.AddUser />} />
                <Route path="user/edit/:id" element={<Pages.Edituser />} />

                <Route path="advertising" element={<Pages.Advertising />} />
                <Route
                    path="advertising/show/:id"
                    element={<Pages.ShowAdvertise />}
                />
                <Route
                    path="advertising/add"
                    element={<Pages.AddAdvertise />}
                />
                <Route
                    path="advertising/edit/:id"
                    element={<Pages.EditAdvertise />}
                />
            </Route>
        </Routes>
    );
}

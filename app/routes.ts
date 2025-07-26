import { type RouteConfig, route, layout } from "@react-router/dev/routes";
import Dashboard from "./routes/admin/dashboard";
import AllUsers from './routes/admin/all-users'


export default [
    layout('routes/admin/admin-layout.tsx', [
            route('Dashboard', 'routes/admin/dashboard.tsx'),
            route('all-users', 'routes/admin/all-users.tsx')

            
    ]),
] satisfies RouteConfig;


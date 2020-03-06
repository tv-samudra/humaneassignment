import LoginContainer from "./containers/LoginContainer";
import Selection from "./components/Selection";
import SpentHistoryContainer from "./containers/SpentHistoryContainer";
import ClientContactContainer from "./containers/ClientContactContainer";
import UpdateClientHistoryContainer from "./containers/UpdateClientHistoryContainer";

export default [
    { path: "/", component: LoginContainer, exact: true, requireAuth: false },
    { path: "/selection", component: Selection, exact: true, requireAuth: true },
    // { path: "/clientSpentHistory", component: SpentHistoryContainer, exact: true, requireAuth: true },
    // { path: "/clientContactManagement", component: ClientContactContainer, exact: true, requireAuth: true },
    { path: "/updateClientHistory/:id", component: UpdateClientHistoryContainer, requireAuth: true }
]
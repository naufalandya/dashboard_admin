import { Routes, Route, Navigate, Link } from 'react-router-dom';
import './index.css';
import Sidebar from './components/molecules/Sidebar';
import Dashboard from './pages/Dashboard';
import Blog from './pages/Blog';
import BlogDetail from './components/template/BlogDetail';
import Projects from './pages/Projects';
import Developer from './pages/Developer';
import Header from './components/molecules/Header';
import ProjectDetail from './pages/ProjectDetail';
import { CreateUserForm } from './components/molecules/forms/UserForm';
import Users from './pages/Users';
import ActivityLogs from './pages/ActivityLogs';
import AutomationForm from './components/molecules/forms/AutomationForm';
import Automation from './pages/Automation';
import Support from './pages/Support';
import Profile from './pages/Profile';
import ChangeLog from './pages/ChangeLog';

const App = () => {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 p-6 overflow-y-auto bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
          <Routes>
            <Route index element={<Navigate to="/dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="dashboard/project" element={<ProjectDetail />} />
            <Route path="dashboard/user" element={<Users />} />
            <Route path="dashboard/user/add" element={<CreateUserForm />} />
            <Route path="dashboard/automation" element={<Automation />} />
            <Route path="dashboard/automation/add" element={<AutomationForm />} />

            <Route path="admin/blog" element={<Blog />} />

            <Route path="blog/:title" element={<BlogDetail />} />
            
            <Route path="developer" element={<Developer />} />
            <Route path="developer/changelog" element={<ChangeLog />} />
            <Route path="support" element={<Support />} />
            <Route path="dashboard/aktivitas" element={<ActivityLogs />} />
            <Route path="projects" element={<Projects />} />

            <Route path="profile" element={<Profile />} />

            <Route path="accounts" element={<div>Accounts Page</div>} />
          </Routes>
        </main>
      </div>
    </div>
  );
};






export default App;

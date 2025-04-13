import React, { useState, ChangeEvent, FormEvent } from "react";
import { HiUser, HiMail, HiLockClosed, HiIdentification, HiUserCircle, HiUserAdd } from "react-icons/hi"


type Action = "read" | "create" | "update" | "delete";
type Feature =
  | "EPC_COST"
  | "PROJECT_MANAGEMENT"
  | "FINANCE_REPORT"
  | "USER_MANAGEMENT"
  | "DASHBOARD"
  | "INVENTORY"
  | "PURCHASING"
  | "HR_MODULE"
  | "PAYROLL"
  | "TASK_MANAGEMENT"
  | "DOCUMENT_CONTROL"
  | "MAINTENANCE"
  | "SAFETY_MONITORING"
  | "AUDIT_TRAIL"
  | "RISK_REGISTER"
  | "COMPLIANCE"
  | "NOTIFICATION_CENTER"
  | "ROLE_MANAGEMENT"
  | "SYSTEM_LOG"
  | "PERFORMANCE_TRACKING";

interface UserAccess {
  [feature: string]: {
    [action in Action]?: boolean;
  };
}

interface FormData {
  full_name: string;
  username: string;
  email: string;
  jabatan: string;
  password: string;
  access: UserAccess;
}

const FEATURES: Feature[] = [
  "EPC_COST",
  "PROJECT_MANAGEMENT",
  "FINANCE_REPORT",
  "USER_MANAGEMENT",
  "DASHBOARD",
  "INVENTORY",
  "PURCHASING",
  "HR_MODULE",
  "PAYROLL",
  "TASK_MANAGEMENT",
  "DOCUMENT_CONTROL",
  "MAINTENANCE",
  "SAFETY_MONITORING",
  "AUDIT_TRAIL",
  "RISK_REGISTER",
  "COMPLIANCE",
  "NOTIFICATION_CENTER",
  "ROLE_MANAGEMENT",
  "SYSTEM_LOG",
  "PERFORMANCE_TRACKING",
];

const ACTIONS: Action[] = ["read", "create", "update", "delete"];

export const CreateUserForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    full_name: "",
    username: "",
    email: "",
    jabatan: "",
    password: "",
    access: {},
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const toggleAccess = (feature: Feature, action: Action) => {
    setFormData((prev) => ({
      ...prev,
      access: {
        ...prev.access,
        [feature]: {
          ...prev.access[feature],
          [action]: !prev.access[feature]?.[action],
        },
      },
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Submitted data:", formData);
    // TODO: kirim ke backend pakai fetch/axios
  };

  return (
<form
  onSubmit={handleSubmit}
  className="space-y-6 p-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white rounded-2xl shadow-2xl max-w-4xl mx-auto mt-10 border border-gray-700"
>
  <h2 className="text-3xl font-bold mb-4 text-white flex items-center gap-2">
    <HiUserCircle className="text-blue-400" />
    Create User
  </h2>

  <div className="grid grid-cols-2 gap-4">
    {[
      { name: "full_name", placeholder: "Full Name", icon: <HiUser /> },
      { name: "username", placeholder: "Username", icon: <HiIdentification /> },
      { name: "email", placeholder: "Email", type: "email", icon: <HiMail /> },
      { name: "jabatan", placeholder: "Jabatan", icon: <HiIdentification /> },
      { name: "password", placeholder: "Password", type: "password", icon: <HiLockClosed /> },
    ].map(({ name, placeholder, type = "text", icon }) => (
      <div key={name} className="relative">
        <div className="absolute inset-y-0 left-3 flex items-center text-gray-400">
          {icon}
        </div>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className="pl-10 bg-gray-800/80 text-white placeholder-gray-400 border border-gray-600 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition w-full"
          value={formData[name as keyof FormData].toString()}
          onChange={handleInputChange}
          required={name !== "jabatan"}
        />
      </div>
    ))}
  </div>

  <h3 className="text-xl font-semibold mt-6 text-white">User Access</h3>
  <div className="border border-gray-700 rounded-xl p-4 bg-gray-900/70 backdrop-blur-md">
    <table className="w-full text-sm table-auto border-collapse text-white">
      <thead>
        <tr className="bg-gray-700/80 >User Access">
          <th className="p-2 text-left">Feature</th>
          {ACTIONS.map((action) => (
            <th key={action} className="p-2 capitalize text-center">
              {action}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {FEATURES.map((feature) => (
          <tr
            key={feature}
            className="border-t border-gray-700 hover:bg-blue-800/20 transition"
          >
            <td className="p-2 font-medium">{feature}</td>
            {ACTIONS.map((action) => (
              <td key={action} className="text-center">
                <input
                  type="checkbox"
                  className="accent-blue-500 w-4 h-4"
                  checked={!!formData.access[feature]?.[action]}
                  onChange={() => toggleAccess(feature, action)}
                />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  <button
    type="submit"
    className="mt-6 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl text-white font-bold transition duration-200 shadow-lg flex items-center gap-2"
  >
    <HiUserAdd className="text-xl" />
    Save User
  </button>
</form>

  );
};


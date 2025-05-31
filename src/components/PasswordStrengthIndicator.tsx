
import { getPasswordStrength } from '@/utils/formValidation';

interface PasswordStrengthIndicatorProps {
  password: string;
  isDarkMode: boolean;
}

const PasswordStrengthIndicator = ({ password, isDarkMode }: PasswordStrengthIndicatorProps) => {
  const { strength, label, color } = getPasswordStrength(password);
  
  if (!password) return null;

  return (
    <div className="mt-2">
      <div className="flex justify-between items-center mb-1">
        <span className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Password strength
        </span>
        <span className={`text-xs font-medium ${
          strength <= 2 ? 'text-red-500' : 
          strength <= 4 ? 'text-yellow-500' : 'text-green-500'
        }`}>
          {label}
        </span>
      </div>
      <div className={`w-full h-2 rounded-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
        <div 
          className={`h-full rounded-full transition-all duration-300 ${color}`}
          style={{ width: `${(strength / 6) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default PasswordStrengthIndicator;


export interface FormErrors {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

export interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const validateForm = (data: FormData, isSignIn: boolean): FormErrors => {
  const errors: FormErrors = {};

  // Name validation (only for sign up)
  if (!isSignIn && !data.name.trim()) {
    errors.name = 'Full name is required';
  } else if (!isSignIn && data.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters';
  }

  // Email validation
  if (!data.email.trim()) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Please enter a valid email address';
  }

  // Password validation
  if (!data.password) {
    errors.password = 'Password is required';
  } else if (data.password.length < 8) {
    errors.password = 'Password must be at least 8 characters';
  }

  // Confirm password validation (only for sign up)
  if (!isSignIn && !data.confirmPassword) {
    errors.confirmPassword = 'Please confirm your password';
  } else if (!isSignIn && data.password !== data.confirmPassword) {
    errors.confirmPassword = 'Passwords do not match';
  }

  return errors;
};

export const getPasswordStrength = (password: string): { strength: number; label: string; color: string } => {
  if (!password) return { strength: 0, label: '', color: '' };

  let score = 0;
  
  // Length check
  if (password.length >= 8) score += 1;
  if (password.length >= 12) score += 1;
  
  // Character variety checks
  if (/[a-z]/.test(password)) score += 1;
  if (/[A-Z]/.test(password)) score += 1;
  if (/[0-9]/.test(password)) score += 1;
  if (/[^A-Za-z0-9]/.test(password)) score += 1;

  if (score <= 2) return { strength: score, label: 'Weak', color: 'bg-red-500' };
  if (score <= 4) return { strength: score, label: 'Medium', color: 'bg-yellow-500' };
  return { strength: score, label: 'Strong', color: 'bg-green-500' };
};

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { resetPassword } from '../api/authApi';

const ResetPasswordForm = () => {
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const { token } = useParams();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await resetPassword(token, { password });
      setMsg(res.data.message);
      setTimeout(() => navigate('/login'), 1500);
    } catch (err) {
      setMsg(err.response?.data?.message || 'Error');
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow mx-auto" style={{ maxWidth: '400px' }}>
        <div className="card-body">
          <h3 className="card-title text-center mb-4">Reset Password</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label>New Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-success w-100">
              Reset Password
            </button>
          </form>
          {msg && <div className="alert alert-info mt-3">{msg}</div>}
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordForm;

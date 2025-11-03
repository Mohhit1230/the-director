import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Input from '../../components/ui/Input'
import Button from '../../components/ui/Button'

// mode: 'login' | 'signup' | 'reset'
export default function AuthForm({ mode = 'login', onSubmit }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [identifier, setIdentifier] = useState('')
  const [remember, setRemember] = useState(false)

  const isLogin = mode === 'login'
  const isSignup = mode === 'signup'
  const isReset = mode === 'reset'

  function handleSubmit(e) {
    e.preventDefault()
    const payload = { name, email, phone, password, identifier, remember }
    if (onSubmit) onSubmit(payload)
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      {isSignup && (
        <Input label="Full name" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your full name" />
      )}

      {/* Email: show for signup and reset; login uses identifier field */}
      {(isSignup || isReset) && (
        <Input label="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />
      )}

      {isLogin && (
        <Input label="Email or Phone" name="identifier" value={identifier} onChange={(e) => setIdentifier(e.target.value)} placeholder="you@example.com or +1 555 555 5555" />
      )}

      {isSignup && (
        <Input label="Phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Enter your phone no." />
      )}

      {!isReset && (
        <Input label="Password" type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder={isSignup ? 'Create a password' : 'Your password'} />
      )}

      {/* Login-specific row: remember + forgot link */}
      {isLogin && (
        <div className="flex items-center justify-between">
          <label className="inline-flex items-center text-sm">
            <input type="checkbox" className="form-checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)} />
            <span className="ml-2 text-gray-600">Remember me</span>
          </label>
          <Link to="/reset-password" className="text-sm text-yellow-600 hover:underline">Forgot?</Link>
        </div>
      )}

      <div>
        <Button type="submit">{isLogin ? 'Sign in' : isSignup ? 'Create account' : 'Send reset link'}</Button>
      </div>
    </form>
  )
}

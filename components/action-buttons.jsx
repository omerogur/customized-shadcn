"use client"

import { Button } from "@/components/ui/button"

// 🎯 Confirm Button - İş mantığı ile
export function ConfirmButton({ onConfirm, loading, children, ...props }) {
  return (
    <Button 
      variant="confirm"
      disabled={loading}
      onClick={onConfirm}
      {...props}
    >
      {loading ? "Onaylanıyor..." : children}
    </Button>
  )
}

// 🎯 Cancel Button - İş mantığı ile
export function CancelButton({ onCancel, children, ...props }) {
  return (
    <Button 
      variant="cancel"
      onClick={onCancel}
      {...props}
    >
      {children}
    </Button>
  )
}

// 🎯 Warning Button - İş mantığı ile
export function WarningButton({ onWarning, children, ...props }) {
  return (
    <Button 
      variant="warning"
      onClick={onWarning}
      {...props}
    >
      {children}
    </Button>
  )
}
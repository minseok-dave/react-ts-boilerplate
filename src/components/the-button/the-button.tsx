import { ButtonHTMLAttributes, forwardRef } from 'react'

import { VariantProps, cva } from 'class-variance-authority'

import { cn } from '@/utils'

const css = cva('box-border w-full border-2 px-4 py-1 active:translate-y-[2px]', {
  variants: {
    variant: {
      contained: 'border-red-200 bg-red-200 text-white',
      outlined: 'border-red-200 bg-white text-slate-300',
    },
    size: {
      sm: 'rounded-sm text-sm',
      md: 'rounded-md text-lg',
      lg: 'rounded-lg text-xl',
    },
  },
  defaultVariants: {
    variant: 'contained',
    size: 'md',
  },
})

type TTheButton = ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof css>

export const TheButton = forwardRef<HTMLButtonElement, TTheButton>(
  ({ type = 'button', variant, size, ...rest }, ref) => {
    return <button ref={ref} type={type} className={cn(css({ variant, size }))} {...rest} />
  },
)

TheButton.displayName = 'TheButton'

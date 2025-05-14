
import { cn } from '@/lib/utils.jsx';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import React from 'react';

const buttonVariants = cva(
	'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
	{
		variants: {
			variant: {
				default: 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow-sm hover:shadow-glow-md',
				destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-md hover:shadow-lg',
				outline:
          'border border-input bg-transparent hover:bg-accent hover:text-accent-foreground shadow-sm hover:shadow-md',
        'outline-glow':
          'border border-primary bg-transparent hover:bg-primary/10 hover:text-primary text-primary shadow-glow-sm hover:shadow-glow-md',
				secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-md hover:shadow-lg',
				ghost: 'hover:bg-accent hover:text-accent-foreground',
				link: 'text-primary underline-offset-4 hover:underline',
        premium: 'bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-purple text-white border-0 hover:opacity-90 transition-opacity duration-300 shadow-glow-md hover:shadow-glow-lg',
			},
			size: {
				default: 'h-10 px-4 py-2',
				sm: 'h-9 rounded-md px-3',
				lg: 'h-12 rounded-md px-8 text-base',
				icon: 'h-10 w-10',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	},
);

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	const Comp = asChild ? Slot : 'button';
	return (
		<Comp
			className={cn(buttonVariants({ variant, size, className }))}
			ref={ref}
			{...props}
		/>
	);
});
Button.displayName = 'Button';

export { Button, buttonVariants };
  
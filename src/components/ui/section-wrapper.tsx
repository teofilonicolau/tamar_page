import React from 'react';
import { cn } from '../../lib/utils';

interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
    dark?: boolean;
}

export const SectionWrapper = React.forwardRef<HTMLElement, SectionWrapperProps>(
    ({ className, dark = false, children, ...props }, ref) => {
        return (
            <section
                ref={ref}
                className={cn(
                    "py-16 md:py-24",
                    dark ? "bg-brand-dark" : "bg-transparent",
                    className
                )}
                {...props}
            >
                {children}
            </section>
        );
    }
);
SectionWrapper.displayName = "SectionWrapper";
